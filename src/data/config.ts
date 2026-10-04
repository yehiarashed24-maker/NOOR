export interface SiteConfig {
  title: string
  tagline: string
  girlName: string
  nicknames: string[]
  creatorName: string
  startDate: string // YYYY-MM-DD
  devMode: boolean
  secretPassword: string
  starName: string
  constellation: string
  namingDate: string
  starCoordinates: {
    rightAscension: string
    declination: string
    magnitude: string
    catalogNumber: string
    registryUrl: string
  }
  music: {
    defaultTitle: string
    placeholderPath: string
  }
  voiceMessage: {
    placeholderPath: string
  }
}

export const siteConfig: SiteConfig = {
  title: "NOOR UNIVERSE",
  tagline: "A little universe made only for Noor.",
  girlName: "نور",
  nicknames: ["يا نوري", "يا نوني", "يا نور"],
  creatorName: "يحيى",
  startDate: "2026-10-04",
  devMode: true, // Toggle true to unlock all 365 messages for previewing, false for daily lock
  secretPassword: "noni",
  starName: "noni star",
  constellation: "Sagittarius (Archer)",
  namingDate: "September 27, 2026",
  starCoordinates: {
    rightAscension: "19° 20' 55.75\"",
    declination: "-20.4349°",
    magnitude: "15.29mag",
    catalogNumber: "58707741 (UCAC3 catalog)",
    registryUrl: "https://www.staracle.com/10058707741",
  },
  music: {
    defaultTitle: "Ambient Starlight • Our Song",
    placeholderPath: "/music/our-song.mp3",
  },
  voiceMessage: {
    placeholderPath: "/audio/final-message.mp3",
  },
}
