
import React, { createContext, useState, useEffect, useContext } from 'react';


interface FavoritesContextType{
    favoriteIds: string[],
    toggleFavorite: (favorite: string) => void
}


const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function useFavorites(): FavoritesContextType {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
}


export function FavoritesProvider({ children }: { children: React.ReactNode }) {

    const [favoriteIds, setFavoriteIds] = useState<string[]>(()=>{

        const savedFavorites = localStorage.getItem('favoriteIds');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });


    useEffect(()=>{
        localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds))
    }, [favoriteIds]);

    const handleToggleFavoritePlace = (favorite: string)=>{
        setFavoriteIds((previousIds) => {

            if (previousIds.includes(favorite)) {
                return previousIds.filter((id) => id !== favorite);
            } else {
                return [...previousIds, favorite];
            }
        });
    }

    const value: FavoritesContextType = {
        favoriteIds,
        toggleFavorite: handleToggleFavoritePlace
    };
              
   
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )

}

