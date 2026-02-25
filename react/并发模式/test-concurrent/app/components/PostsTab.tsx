import SlowPost from "./SlowPost";

const postList: any[] = []
for (let i = 0; i < 1000; i++)postList.push({})
export default function PostsTab() {
  return (
    <div className="">
      {
        postList.map((item, index) => {
          console.log('PostsTab render ' + index) // SlowPost会被中断，PostsTab这个循环不会被中断，这个循环也不是循环调用SlowPost函数
          return <SlowPost key={index} index={index} />
        })
      }
    </div>
  );
}
