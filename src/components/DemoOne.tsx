import InfiniteGallery  from "./ui/3d-gallery-photography";

const createPlaceholder = (color: string, text: string) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="${color}"/><text x="400" y="300" font-family="sans-serif" font-size="40" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text></svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export default function DemoOne({ onComplete }: { onComplete: () => void }) {
const sampleImages = [
		{ src: createPlaceholder('#E63946', 'Memory 1'), alt: 'Image 1' },
		{ src: createPlaceholder('#F4A261', 'Memory 2'), alt: 'Image 2' },
		{ src: createPlaceholder('#E9C46A', 'Memory 3'), alt: 'Image 3' },
		{ src: createPlaceholder('#2A9D8F', 'Memory 4'), alt: 'Image 4' },
		{ src: createPlaceholder('#264653', 'Memory 5'), alt: 'Image 5' },
		{ src: createPlaceholder('#8338EC', 'Memory 6'), alt: 'Image 6' },
		{ src: createPlaceholder('#3A86FF', 'Memory 7'), alt: 'Image 7' },
		{ src: createPlaceholder('#FF006E', 'Memory 8'), alt: 'Image 8' },
	];

  return (
    <div className="h-screen w-full bg-black relative overflow-hidden">
			<InfiniteGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-full w-full"
                onComplete={onComplete}
			/>
			<div className="h-full inset-0 pointer-events-none absolute top-0 left-0 flex items-center justify-center text-center px-3 mix-blend-exclusion text-white">
				<h1 className="font-serif text-4xl md:text-7xl tracking-tight">
					<span className="italic">Birthday World</span>
				</h1>
			</div>

			<div className="text-center absolute bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold text-white">
				<p>Scroll through your memories to proceed</p>
			</div>
	</div>
  );
}
