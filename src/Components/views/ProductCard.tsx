import Image from "next/image";
import Link from "next/link";
import { Image as IImage} from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';


function ProductCard(props: any) { 
    return (
       <Link href={`/products/${props._id}`}>
        <div> 
        <div className='py-5'>
        <Image src={urlForImage(props.image[0]).url()} alt={"imag"} 
        width={650} height={1500} 
        className=' object-cover object-top
        ' />
       <h2 className="font-bold text-xl mt-3">{props.title}</h2>
       <h3 className="font-bold text-gray-600 text-lg ">{props.sku}</h3>
       <h4>{props.sizes}</h4>
       <p className="font-semibold text-2xl">${props.price}</p>
       

       
       
       

      
     </div>
     </div>
        
       </Link>
    )
  }
  
  export default ProductCard