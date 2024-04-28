import { Link } from "react-router-dom";
import CardGigs from "./component/CardGigs";
import "./index.css";

export default function ListGigsView() {
  const gigs = [
    {
      id: "1",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
    {
      id: "2",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Cualquier cosa",
      description: "henrym.718@hotmail.com",
    },
    {
      id: "3",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "otra situacion de empleabilidad",
      description: "www.google.com",
    },
    {
      id: "4",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Feria de esoania",
      description: "idealistga.com",
    },
    {
      id: "5",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
    {
      id: "6",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Cualquier cosa",
      description: "henrym.718@hotmail.com",
    },
    {
      id: "7",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "otra situacion de empleabilidad",
      description: "www.google.com",
    },
    {
      id: "8",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Feria de esoania",
      description: "idealistga.com",
    },
    {
      id: "1",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
    {
      id: "2",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Cualquier cosa",
      description: "henrym.718@hotmail.com",
    },
    {
      id: "3",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "otra situacion de empleabilidad",
      description: "www.google.com",
    },
    {
      id: "4",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Feria de esoania",
      description: "idealistga.com",
    },
    {
      id: "5",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Europe Street beat",
      description: "www.instagram.com",
    },
    {
      id: "6",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Cualquier cosa",
      description: "henrym.718@hotmail.com",
    },
    {
      id: "7",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "otra situacion de empleabilidad",
      description: "www.google.com",
    },
    {
      id: "8",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      title: "Feria de esoania",
      description: "idealistga.com",
    },
  ];

  return (
    <div className='container'>
      {gigs.map((gig) => (
        <div className='container__item '>
          <Link to={`/destailgig/${gig.id}`}>
            <CardGigs key={gig.id} gig={gig} />
          </Link>
        </div>
      ))}
    </div>
  );
}
