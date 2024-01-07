import axios from "axios";
import React, { useCallback, useMemo, useState } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface FavoriteButtonProps {
    movieId: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
    const { mutate: mutateFavorites } = useFavorites();
    const { data: currentUser, mutate } = useCurrentUser();
    
    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(movieId);
    }, [currentUser, movieId])

    const toggleFavorites = useCallback(async () => {
        let response;

        if(isFavorite) {
            response = await axios.delete('/api/favorites',  {data: { movieId } });
        } else {
            response = await axios.post('/api/favorites', { movieId });
        }

        const updatedFavoriteIds = response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds: updatedFavoriteIds,
        })

        mutateFavorites();
    }, [movieId, isFavorite, currentUser, mutateFavorites, mutate]);

    const Icon = isFavorite ? (<FaHeart className="absolute top-4 left-4 text-gray-300" />) : (<FaRegHeart className="absolute top-4 left-4 text-gray-300" />);

    return (
        <p onClick={toggleFavorites}>
            {Icon}
        </p>
    )
}

export default FavoriteButton;