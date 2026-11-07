// Tracks shown in the cover-flow player and Now Playing panel.
// To add a track: add an entry here with its cover and 30-second preview URL.
// Source: Apple's public iTunes catalog for the artist (artist id 1718881818).
// Preview URLs come from Apple and may change; re-fetch them if playback stops working.

export type CatalogTrack = {
  id: string // Apple Music track id
  title: string
  fullLength: string // full track length shown as info, e.g. "8:18"
  artwork: string // square cover image (600x600 or larger)
  previewUrl: string // 30-second audio preview (m4a/aac)
}

// Current iTunes artwork for "Introducing: Michael Webster". Every track on it
// shares this cover; swap in per-track art when you have it.
const ALBUM_ART = "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/80/75/db/8075db1d-c724-26c8-88bc-e36fef26b2ef/821451000148_cover.jpg/600x600bb.jpg"

export const CATALOG: CatalogTrack[] = [
  {
    id: "1891132189",
    title: "St. Cecilia",
    fullLength: "8:18",
    artwork: ALBUM_ART,
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/12/b1/a4/12b1a412-bbc0-d89a-f494-814d20ae904a/mzaf_165942938287839896.plus.aac.p.m4a",
  },
  {
    id: "1891132190",
    title: "Body and Soul",
    fullLength: "7:01",
    artwork: ALBUM_ART,
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c8/35/30/c83530e4-4332-f39d-c110-9bbd3ec26e0e/mzaf_6631877356043283985.plus.aac.p.m4a",
  },
  {
    id: "1891132191",
    title: "Confirmation",
    fullLength: "5:12",
    artwork: ALBUM_ART,
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/40/95/99/409599a7-b5ce-e773-62e4-5c52c285d82f/mzaf_7679625498505078767.plus.aac.p.m4a",
  },
  {
    id: "1891132192",
    title: "For Andrew",
    fullLength: "4:55",
    artwork: ALBUM_ART,
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0f/e0/aa/0fe0aa1a-70ae-2680-871b-2764a870e32b/mzaf_9990487594425716119.plus.aac.p.m4a",
  },
  {
    id: "1891132193",
    title: "Melodia Oscura",
    fullLength: "6:14",
    artwork: ALBUM_ART,
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/3e/58/90/3e5890cc-d0e1-a39b-1114-988d1e3bd7a2/mzaf_13726419412027825571.plus.aac.p.m4a",
  },
  {
    id: "1891132194",
    title: "This Nearly Was Mine",
    fullLength: "6:12",
    artwork: ALBUM_ART,
    previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8d/d5/c7/8dd5c78e-0695-2121-e7b7-e3e6205f2672/mzaf_7386139089897542524.plus.aac.p.m4a",
  },
]
