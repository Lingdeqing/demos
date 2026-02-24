import SlowPost from "./SlowPost";

const postList: any[] = []
for (let i = 0; i < 1000; i++)postList.push({})
export default function PostsTab() {
  return (
    <div className="">
      {
        postList.map((item, index) => <SlowPost key={index} index={index} />)
      }
    </div>
  );
}
