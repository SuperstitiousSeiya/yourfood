import { CategoriesComponentProps } from "@/components/FoodUI/Categories";
import { Category } from "../typings/types";
import { Meal } from "@/components/FoodUI/Meals";

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';


interface MealsResponse {
    meals: Meal[] | null;
}



const fetchData = async (url: string) => {
    try {

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error(error);
        
    }
};


export const useFood = () => {
    const searchMealByName = (name: string): Promise<any> => {
        return fetchData(`${API_BASE_URL}/search.php?s=${name}`);
    };

    const listMealsByFirstLetter = (letter: string): Promise<MealsResponse> => {
        return fetchData(`${API_BASE_URL}/search.php?f=${letter}`);
    };

    const lookupFullMealDetailsById = (id: string): Promise<MealsResponse> => {
        return fetchData(`${API_BASE_URL}/lookup.php?i=${id}`);
    };

    const lookupRandomMeal = (): Promise<MealsResponse> => {
        return fetchData(`${API_BASE_URL}/random.php`);
    };

    const lookupRandomSelection = (): Promise<MealsResponse> => {
        return fetchData(`${API_BASE_URL}/randomselection.php`);
    };

    const listAllMealCategories = (): Promise<CategoriesComponentProps> => {
        return fetchData(`${API_BASE_URL}/categories.php`);
    };

    const listAllCategories = (): Promise<CategoriesComponentProps> => {
        return fetchData(`${API_BASE_URL}/list.php?c=list`);
    };

    const listAllAreas = (): Promise<CategoriesComponentProps> => {
        return fetchData(`${API_BASE_URL}/list.php?a=list`);
    };

    const listAllIngredients = (): Promise<CategoriesComponentProps> => {
        return fetchData(`${API_BASE_URL}/list.php?i=list`);
    };

    const filterByMainIngredient = (ingredient: string): Promise<MealsResponse> => {
        return fetchData(`${API_BASE_URL}/filter.php?i=${ingredient}`);
    };

    const filterByCategory = (category: string): Promise<any> => {
        return fetchData(`${API_BASE_URL}/filter.php?c=${category}`);
    };

    const filterByArea = (area: string): Promise<MealsResponse> => {
        return fetchData(`${API_BASE_URL}/filter.php?a=${area}`);
    };

    return { searchMealByName, listMealsByFirstLetter, filterByMainIngredient, filterByCategory, filterByArea, listAllIngredients, listAllAreas, listAllCategories, listAllMealCategories, lookupRandomSelection, lookupRandomMeal, lookupFullMealDetailsById }
}

