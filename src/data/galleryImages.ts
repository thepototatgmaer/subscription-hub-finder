
export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryCategories {
  sports: GalleryImage[];
  luxury: GalleryImage[];
  vintage: GalleryImage[];
  [key: string]: GalleryImage[];
}

const galleryImages: GalleryCategories = {
  sports: [
    {
      src: "https://images.unsplash.com/photo-1544207916-df1cae3cd122?q=80&w=900&auto=format&fit=crop",
      alt: "Red sports car on coastal road",
    },
    {
      src: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=900&auto=format&fit=crop",
      alt: "Blue sports car in studio",
    },
    {
      src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=900&auto=format&fit=crop",
      alt: "Sports car on race track",
    },
    {
      src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage sports car",
    },
    {
      src: "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?q=80&w=900&auto=format&fit=crop",
      alt: "Yellow sports car front view",
    },
    {
      src: "https://images.unsplash.com/photo-1605515298946-d663d6932162?q=80&w=900&auto=format&fit=crop",
      alt: "Modern sports car interior",
    },
  ],
  luxury: [
    {
      src: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=900&auto=format&fit=crop",
      alt: "Luxury sedan in showroom",
    },
    {
      src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=900&auto=format&fit=crop",
      alt: "Black luxury car on city street",
    },
    {
      src: "https://images.unsplash.com/photo-1566433469209-5c1c2e184c19?q=80&w=900&auto=format&fit=crop",
      alt: "Luxury SUV on mountain road",
    },
    {
      src: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?q=80&w=900&auto=format&fit=crop",
      alt: "Luxury car dashboard",
    },
    {
      src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=900&auto=format&fit=crop",
      alt: "Luxury car detail",
    },
    {
      src: "https://images.unsplash.com/photo-1537984822441-cfe9d6cb617d?q=80&w=900&auto=format&fit=crop",
      alt: "Luxury convertible",
    },
  ],
  vintage: [
    {
      src: "https://images.unsplash.com/photo-1541038018777-5d35a6f6b05d?q=80&w=900&auto=format&fit=crop",
      alt: "Classic vintage car",
    },
    {
      src: "https://images.unsplash.com/photo-1569759276108-31b8e7e43e7b?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage car headlight",
    },
    {
      src: "https://images.unsplash.com/photo-1590083948608-525d72263a60?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage car dashboard",
    },
    {
      src: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage car in countryside",
    },
    {
      src: "https://images.unsplash.com/photo-1591293815087-095797the975?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage car detail",
    },
    {
      src: "https://images.unsplash.com/photo-1565262353542-09e6ceab6407?q=80&w=900&auto=format&fit=crop",
      alt: "Vintage car interior",
    },
  ]
};

export default galleryImages;
