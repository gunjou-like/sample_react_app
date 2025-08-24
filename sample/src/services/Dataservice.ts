//React側でAPI通信を実装

// src/services/playerService.ts
import { Data } from "../types/Data";

export const fetchData = async (count: number): Promise<Data[]> => {
    const response = await fetch(`http://localhost:5000/api/players?count=${count}`);
    if (!response.ok) {
        throw new Error("データの取得に失敗しました");
    }
    const data = await response.json();
    return data;
};