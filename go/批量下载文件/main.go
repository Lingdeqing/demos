package main

import (
	"archive/zip"
	"context"
	"errors"
	"fmt"
	"io"
	"log"
	"mime"
	"net/http"
	"os"
	"path"
	"strings"
	"time"
)

func DownloadZipFromURLs(w http.ResponseWriter, r *http.Request) {
	// urls := []string{
	// 	"https://ts1.mm.bing.net/th?id=OIP.5bqcvMSZ4Ybo905MEaacygHaEZ&pid=15.1",
	// 	"https://creaibo-ai-1303249706.cos.ap-nanjing.myqcloud.com/4faa8ad5437168620d62f16fafbb967c.jpg",
	// 	"https://creaibo-ai-1303249706.cos.ap-nanjing.myqcloud.com/4faa8ad5437168620d62f16fafbb967c.jpg?imageMogr2/format/webp/thumbnail/72x144",
	// 	"https://creaibo-ai-1303249706.cos.ap-nanjing.myqcloud.com/fd043f41095b9d7579626c11e4c50204.png?imageMogr2/format/webp/thumbnail/72x144",
	// }

	msgStr, err := loadMessages("assets.json")
	if err != nil {
		log.Println("load messages error:", msgStr)
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}
	urls, _ := GetAllUrls(msgStr)
	// fmt.Println("urls:", urls)

	w.Header().Set("Content-Type", "application/zip")
	w.Header().Set("Content-Disposition", fmt.Sprintf("attachment; filename=assets_%s.zip", time.Now().Format("20060102_150405")))

	zipWriter := zip.NewWriter(w)
	defer func() {
		if err := zipWriter.Close(); err != nil {
			log.Println("zip close error:", err)
		}
	}()

	ctx := r.Context()
	client := &http.Client{}

	for i, u := range urls {
		// 🔥 第一层检查：开始下载前检查是否取消
		select {
		case <-ctx.Done():
			log.Println("user canceled download 11", u)
			return
		default:
		}

		// 请求体绑定 ctx → 可中断下载
		req, err := http.NewRequestWithContext(ctx, "GET", u, nil)
		if err != nil {
			if errors.Is(err, context.Canceled) {
				log.Println("user canceled download 22", u)
				return
			}
			log.Println("req error:", err)
			continue
		}

		resp, err := client.Do(req)
		if err != nil {
			if errors.Is(err, context.Canceled) {
				log.Println("user canceled download 33", u)
				return
			}
			log.Println("fetch error:", err)
			continue
		}
		defer resp.Body.Close()

		if resp.StatusCode != http.StatusOK {
			log.Println("bad status for url:", u, resp.Status)
			continue
		}

		ext := ""

		// 定义常见扩展名集合
		commonExts := []string{".mp3", ".mp4", ".png", ".jpg", ".jpeg", ".gif", ".webp"}

		// 1️⃣ 先根据 URL 匹配常见扩展名
		for _, e := range commonExts {
			if strings.Contains(strings.ToLower(u), e) {
				ext = e
				break
			}
		}

		// 2️⃣ 如果 URL 没匹配到，就根据 Content-Type 推断
		if ext == "" {
			if ct := resp.Header.Get("Content-Type"); ct != "" {
				if exts, _ := mime.ExtensionsByType(ct); len(exts) > 0 {
					ext = exts[0]
				}
			}
		}

		// 3️⃣ 如果 Content-Type 也没给出，尝试用 URL 的 basename
		if ext == "" {
			base := path.Base(u)
			if strings.Contains(base, ".") {
				ext = path.Ext(base)
			}
		}

		// 4️⃣ 最后兜底, 兼容奇怪扩展名
		switch ext {
		case ".jpe":
			ext = ".jpg"
		case ".mpga":
			ext = ".mp3"
		}

		filename := fmt.Sprintf("file_%d%s", i+1, ext)
		// fmt.Println(filename, u)
		zipPath := path.Join("assets", filename)
		fileWriter, err := zipWriter.Create(zipPath)
		if err != nil {
			log.Println("failed to create zip entry:", err)
			continue
		}

		// 关键：将 resp.Body → zipWriter
		// 若 ctx 取消，io.Copy 会立刻报错并返回
		if _, err := io.Copy(fileWriter, resp.Body); err != nil {
			if errors.Is(err, context.Canceled) {
				log.Println("user canceled download 44", u)
				return
			}
			log.Println("copy error:", err)
			continue
		}
	}
}

func main() {
	http.HandleFunc("/download", DownloadZipFromURLs)
	log.Println("listening on :8085")
	http.ListenAndServe(":8085", nil)
}

func loadMessages(path string) (string, error) {
	data, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}
	return string(data), nil
}
