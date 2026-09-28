export const business = {
  name: "FM HARRIS Landscaping & Snow Removal",
  shortName: "FM HARRIS",
  phone: "(312) 778-3313",
  phoneHref: "tel:+13127783313",
  address: "223 S 19th Ave, Maywood, IL 60153",
  tagline: "Outdoor spaces, properly cared for.",
  hours: "7am–7pm daily",
};

export const media = {
  lawn: "/images/lawn.jpg",
  hedge: "/images/hedge.jpg",
  shrub: "/images/shrub.jpg",
  trim: "/images/trim.jpg",
  whyChooseUs: "/images/why-choose-us.jpg",
  fence: "/images/fence.jpg",
  lawnInstall: "/images/lawn-install.jpg",
  cleanup: "/images/cleanup.jpg",
  treatment: "/images/treatment.webp",
  feeding: "/images/feeding.webp",
  brush: "/images/brush.webp",
  video: "/videos/hero.mp4",
};
export const services = [
  { title: "Lawn care", description: "Reliable mowing, edging, feeding and seasonal treatments for healthier turf.", image: media.treatment },
  { title: "Hedge & shrub care", description: "Thoughtful pruning that keeps plants dense, balanced and beautifully shaped.", image: media.hedge },
  { title: "Garden design", description: "Planting plans with year-round color, texture and practical maintenance in mind.", image: media.shrub },
  { title: "Grounds maintenance", description: "Scheduled visits that keep residential and commercial grounds consistently sharp.", image: media.brush },
  { title: "Hardscaping", description: "Paths, patios, fencing, edging and outdoor details built for daily life and lasting value.", image: media.fence },
  { title: "Seasonal cleanups", description: "Leaf clearance, bed preparation and property resets from spring through winter.", image: media.cleanup },
  { title: "Snow Removal", description: "Dependable winter snow plowing and removal for driveways, walkways and lots — fast response after every storm.", image: media.cleanup },
];
export const nav = [{to:"#home",label:"Home"},{to:"#services",label:"Services"},{to:"#plan-my-yard",label:"Plan My Yard"},{to:"#about",label:"About"},{to:"#contact",label:"Contact"}] as const;
export const whatsappUrl = "https://wa.me/13127783313?text=Hello%20FM%20HARRIS%20Landscaping%20%26%20Snow%20Removal%2C%20I%27d%20like%20a%20free%20quote.";
