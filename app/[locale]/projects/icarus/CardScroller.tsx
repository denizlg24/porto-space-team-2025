export function CardScroller({ children }: { children: React.ReactNode[] }) {
  return (
    <div className="w-full overflow-y-scroll snap-y snap-mandatory px-4 h-[300px] lg:h-[350px] hide-scrollbar">
      <div className="flex flex-col items-center w-full">
        {children.map((child, index) => (
          <div
            key={index}
            className="card-scroll-item snap-start w-full flex justify-center h-[300px] lg:h-[350px]"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
