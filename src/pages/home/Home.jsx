import InputSearch from "./components/InputSearch";
import SubcategoryCarousel from "./components/SubcategoryCarousel";

export default function Home() {
  //data del carrusels
  const subcategories = [
    {
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
    {
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Cualquier cosa",
      description: "henrym.718@hotmail.com",
    },
    {
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "otra situacion de empleabilidad",
      description: "www.google.com",
    },
    {
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Feria de esoania",
      description: "idealistga.com",
    },
    {
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
    {
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Cualquier cosa",
      description: "henrym.718@hotmail.com",
    },
    {
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "otra situacion de empleabilidad",
      description: "www.google.com",
    },
    {
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Feria de esoania",
      description: "idealistga.com",
    },
  ];

  return (
    <div>
      <InputSearch />
      <SubcategoryCarousel subcategories={subcategories} />
    </div>
  );
}
