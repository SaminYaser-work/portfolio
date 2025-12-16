/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Global script-provided library (public/tagCanvas.min.js)
// Minimal typing to satisfy TypeScript where used.
declare global {
	interface TagCanvasConfig {
		initial?: [number, number]
		outlineMethod?: string
		noSelect?: boolean
		minSpeed?: number
		textFont?: string
		fadeIn?: number
		depth?: number
		wheelZoom?: boolean
		shadowOffset?: [number, number]
		stretchX?: number
		shuffleTags?: boolean
		Start?: (id: string) => void
	}
	// TagCanvas is attached to window by the external script.
	// eslint-disable-next-line no-var
	var TagCanvas: TagCanvasConfig & { Start: (id: string) => void }
}

export { }
