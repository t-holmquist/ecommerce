import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./ui/button"


export const ProductList = ({apperalProducts}) => {

  return (
    <div className="grid grid-cols-2 gap-4">
        {apperalProducts.map(({id, imgUrl, size, color, brand, price, title}) => (
          <div key={id} className="relative rounded-2xl bg-white p-2 shadow">
            <img className="absolute -right-2 bottom-0" src={imgUrl} width={100} height={120} alt="" />
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="font-oswald text-lg">{title}</h2>
              <FontAwesomeIcon icon={faHeart}/>
            </div>
            <div className="flex flex-col gap-1 space-y-2">
              {/* Brand */}
              <div className="rounded-sm border px-1 w-fit border-slate-300">
                <p className=" font-source-sans text-xs">{brand}</p>
              </div>
               {/* Details */}
              <div className="space-y-1">
                <p className="font-semibold font-source-sans text-xs">Size: <span className="font-normal">{size}</span></p>
                <div className="flex items-center gap-2 font-semibold font-source-sans text-xs">
                  <p>Color: </p>
                  {/* Tailwind style transpilaton issue causes the need to use inline style for the color. */}
                  <div style={{backgroundColor: color}} className="rounded-full w-4 h-4 border border-text-gray"></div>
                </div>
                <p className="font-semibold font-source-sans text-xs">Price: <span className="font-normal">{`$${price} USD`}</span></p>
              </div>
            </div>
            <Button classname={'text-xs mt-4'} title="Add to cart"/>
          </div>
        ))}
    </div>
  )
}

export default ProductList