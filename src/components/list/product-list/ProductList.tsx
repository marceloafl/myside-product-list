import styles from "@/components/list/product-list/ProductList.module.css";
import ProductItem from "@/components/item/ProductItem";

export type ProductType = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  discount: number;
  popular?: boolean;
  onSale?: true;
};

const products: ProductType[] = [
  {
    id: 1,
    title:
      "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price: 773,
    description:
      "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
    brand: "sony",
    model: "WH-1000XM3",
    color: "silver",
    category: "audio",
    discount: 11,
  },
  {
    id: 2,
    title: "Microsoft Xbox X/S Wireless Controller Robot White",
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    price: 57,
    description:
      "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4,
  },
  {
    id: 1,
    title:
      "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price: 773,
    description:
      "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
    brand: "sony",
    model: "WH-1000XM3",
    color: "silver",
    category: "audio",
    discount: 11,
  },
  {
    id: 2,
    title: "Microsoft Xbox X/S Wireless Controller Robot White",
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    price: 57,
    description:
      "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4,
  },
  {
    id: 1,
    title:
      "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price: 773,
    description:
      "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
    brand: "sony",
    model: "WH-1000XM3",
    color: "silver",
    category: "audio",
    discount: 11,
  },
  {
    id: 2,
    title: "Microsoft Xbox X/S Wireless Controller Robot White",
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    price: 57,
    description:
      "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4,
  },
  {
    id: 1,
    title:
      "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price: 773,
    description:
      "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
    brand: "sony",
    model: "WH-1000XM3",
    color: "silver",
    category: "audio",
    discount: 11,
  },
  {
    id: 2,
    title: "Microsoft Xbox X/S Wireless Controller Robot White",
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
    price: 57,
    description:
      "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app",
    brand: "microsoft",
    model: "Xbox X/S",
    color: "white",
    category: "gaming",
    popular: true,
    discount: 4,
  },
  {
    id: 1,
    title:
      "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
    price: 773,
    description:
      "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
    brand: "sony",
    model: "WH-1000XM3",
    color: "silver",
    category: "audio",
    discount: 11,
  },
];

export default function ProductList() {
  return (
    <li className={styles.list}>
      {products.map((product) => (
        <ProductItem product={product} />
        // <ul key={product.id} className={styles.item}>
        //   <Link href={`/product/${product.id}`} className={styles.anchor}>
        //     <div className={styles.imageWrapper}>
        //       <Image alt="My Side" src={product.image} fill />
        //     </div>
        //     <div className={styles.infoWrapper}>
        //       <h2 className={styles.title}>{product.title}</h2>
        //       <p className={styles.price}>{formatPrice(product.price)}</p>
        //       <p className={styles.description}>{product.description}</p>
        //     </div>
        //   </Link>
        // </ul>
      ))}
    </li>
  );
}
