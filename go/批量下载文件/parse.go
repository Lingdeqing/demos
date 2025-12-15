package main

import (
	"encoding/json"
)

type Message struct {
	ID           string  `json:"id"`
	Timestamp    int64   `json:"timestamp"`
	Role         string  `json:"role"`
	Content      string  `json:"content"`
	SectionTitle string  `json:"sectionTitle,omitempty"`
	Meta         *Meta   `json:"meta,omitempty"`
	BlockMap     []Block `json:"blockMap,omitempty"`
	IsLoading    bool    `json:"isLoading,omitempty"`
	Loading      bool    `json:"loading,omitempty"`
	Name         string  `json:"name,omitempty"`
}

type Meta struct {
	RenderContext []ContextItem `json:"renderContext,omitempty"`
	Context       []ContextItem `json:"context,omitempty"`
}

type ContextItem struct {
	Name    string `json:"name"`
	Content string `json:"content"`
	Type    string `json:"type"`
}

type Block struct {
	Type         string        `json:"type"`
	Content      string        `json:"content"`
	ToolMetadata *ToolMetadata `json:"tool_metadata,omitempty"`
	BlockData    string        `json:"blockData,omitempty"`
}

type ToolMetadata struct {
	Status    string          `json:"status"`
	Directive json.RawMessage `json:"directive,omitempty"`
	Ctx       json.RawMessage `json:"ctx,omitempty"`
	Result    json.RawMessage `json:"result,omitempty"`
}

type ToolDirective struct {
	Tool string          `json:"tool"`
	Ctx  json.RawMessage `json:"ctx,omitempty"`
}

type ToolCtx struct {
	Status string          `json:"status"`
	Result json.RawMessage `json:"result,omitempty"`
	Params json.RawMessage `json:"params,omitempty"`
}
type ToolParams struct {
	Arguments json.RawMessage `json:"arguments,omitempty"`
}
type ToolParamsArgs struct {
	Type string `json:"type,omitempty"`
}

type ToolResult struct {
	Output json.RawMessage `json:"output,omitempty"`
}

type ToolOutput struct {
	Type     string          `json:"type,omitempty"`
	CoverUrl string          `json:"cover_url,omitempty"`
	Content  json.RawMessage `json:"content,omitempty"`
}

type ToolSearchAudioResult struct {
	List json.RawMessage `json:"list,omitempty"`
}
type ToolSearchAudioItem struct {
	Source json.RawMessage `json:"_source,omitempty"`
}
type ToolSearchAudioSource struct {
	Url string `json:"url,omitempty"`
}

type ToolSearchImageResult struct {
	List json.RawMessage `json:"list,omitempty"`
}
type ToolSearchImageItem struct {
	ImagePreviewUrl string `json:"image_preview_url,omitempty"`
	ImageUrl        string `json:"image_url,omitempty"`
}

func GetAllUrls(msgStr string) ([]string, error) {
	var msgs []Message
	if err := json.Unmarshal([]byte(msgStr), &msgs); err != nil {
		return nil, err
	}

	var urls []string

	for _, m := range msgs {
		for _, b := range m.BlockMap {
			if b.ToolMetadata == nil || len(b.ToolMetadata.Directive) == 0 {
				continue
			}

			var directive ToolDirective
			if err := json.Unmarshal(b.ToolMetadata.Directive, &directive); err != nil {
				continue
			}
			var toolCtx ToolCtx
			if err := json.Unmarshal(directive.Ctx, &toolCtx); err != nil {
				continue
			}

			var params ToolParams
			if err := json.Unmarshal(toolCtx.Params, &params); err != nil {
				continue
			}
			var args ToolParamsArgs
			json.Unmarshal(params.Arguments, &args)

			// 搜索结果
			if directive.Tool == "query_resource" {
				// bgm 特效音
				if args.Type == "bgm" || args.Type == "sound" {
					var result ToolSearchAudioResult
					if err := json.Unmarshal(toolCtx.Result, &result); err != nil {
						continue
					}
					var items []ToolSearchAudioItem
					if err := json.Unmarshal(result.List, &items); err != nil {
						continue
					}
					for _, item := range items {
						var source ToolSearchAudioSource
						if err := json.Unmarshal(item.Source, &source); err != nil {
							continue
						}
						if len(source.Url) != 0 {
							urls = append(urls, source.Url)
						}
					}
				}

				// 图片
				if args.Type == "image" {
					var result ToolSearchImageResult
					if err := json.Unmarshal(toolCtx.Result, &result); err != nil {
						continue
					}
					var items []ToolSearchImageItem
					if err := json.Unmarshal(result.List, &items); err != nil {
						continue
					}
					for _, item := range items {
						if len(item.ImageUrl) != 0 {
							urls = append(urls, item.ImageUrl)
						} else if len(item.ImagePreviewUrl) != 0 {
							urls = append(urls, item.ImagePreviewUrl)
						}
					}
				}

				continue
			}

			// 生成结果
			var result ToolResult
			if err := json.Unmarshal(toolCtx.Result, &result); err != nil {
				continue
			}
			var output ToolOutput
			if err := json.Unmarshal(result.Output, &output); err != nil {
				continue
			}

			// 图片
			switch directive.Tool {
			case "generate_image",
				"generate_image_with_text",
				"generate_image_with_image",
				"remove_background",
				"generate_cover_image_with_text":

				var url string
				if json.Unmarshal(output.Content, &url) == nil {
					urls = append(urls, url)
					continue
				}

				var urlList []string
				if json.Unmarshal(output.Content, &urlList) == nil {
					urls = append(urls, urlList...)
					continue
				}
			}

			// 视频
			switch directive.Tool {
			case "generate_video_with_text",
				"generate_video_with_image":

				var url string
				if json.Unmarshal(output.Content, &url) == nil {
					urls = append(urls, url)

					if len(output.CoverUrl) != 0 {
						urls = append(urls, output.CoverUrl)
					}
					continue
				}
			}

			// 音频
			switch directive.Tool {
			case "generate_voicecover_with_text",
				"generate_bgm_with_text",
				"generate_audio_with_text":
				var url string
				if json.Unmarshal(output.Content, &url) == nil {
					urls = append(urls, url)
					continue
				}
			}

		}
	}

	return urls, nil
}
