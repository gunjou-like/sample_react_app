import React, { useEffect, useState } from "react";
import { Data } from "../types/Data";
import { fetchData } from "../services/Dataservice";

const DataList: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(3)
            .then((data) => {
            setData(data);
            setLoading(false);
            })
            .catch((err) => {
            console.error(err);
            setLoading(false);
            });
    }, []);

    if (loading) return <p>読み込み中...</p>;

    return (
        <div>
            <h2>商品一覧（APIから取得）</h2>
        <ul>
        {data.map((d) => (
            <li key={d.id}>
                {d.name} - 定価:{d.price} 在庫:{d.stock}
            </li>
        ))}
        </ul>
    </div>
    );
};

export default DataList;