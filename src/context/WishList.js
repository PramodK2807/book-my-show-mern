// USER LOGIN OR NOT CHECKING GLOBALLY

import { createContext, useContext,  useEffect,  useState } from "react";


const WishlistContext = createContext()


const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([])


    useEffect(() => {
        let existingWishlist = localStorage.getItem('wishlist')
        if (existingWishlist){
            setWishlist(JSON.parse(existingWishlist))
        }
    }, [])

    
    return (
        <WishlistContext.Provider value={[wishlist, setWishlist]}>
            {children}
        </WishlistContext.Provider>
    )

}


// Custom Hook

const useWishlist = () => useContext(WishlistContext)

export {useWishlist, WishlistProvider}