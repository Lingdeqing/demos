
export default function SlowPost({ index }: { index: number }) {
  console.log('render ' + index)
  let startTime = performance.now();
  while (performance.now() - startTime < 1) { }
  return (
    <div className="">
      post #{index}
    </div>
  );
}
