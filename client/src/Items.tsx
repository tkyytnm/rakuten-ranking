import { useEffect, useState } from "react";
import "./Items.css";

interface Error {
  message: string;
}
interface Data {
  Items?: object[];
}
interface Item {
  Item?: {
    itemCode: string;
    rank: number;
    itemUrl: string;
    itemName: string;
    mediumImageUrls: { imageUrl: string }[];
    itemPrice: string;
    taxFlag: number;
    itemCaption: string;
    reviewCount: number;
    reviewAverage: string;
    shopUrl: string;
    shopName: string;
  };
}

function Items() {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [data, setData] = useState<Data>({});

  const requestUrl = ``;

  useEffect(() => {
    fetch(requestUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [requestUrl]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="items">
        {data.Items?.map((item: Item) => {
          return (
            <li key={item.Item?.itemCode} className="item">
              <div className="rank">
                {item.Item?.rank}
                <span>位</span>
              </div>
              <h3 className="name">
                <a href={item.Item?.itemUrl}>{item.Item?.itemName}</a>
              </h3>
              <div className="wrapper">
                <a href={item.Item?.itemUrl}>
                  <img
                    src={item.Item?.mediumImageUrls[0].imageUrl}
                    alt={item.Item?.itemName}
                  />
                </a>

                <div className="description">
                  <div className="price">
                    {item.Item?.itemPrice}円
                    <span className="tax">
                      {item.Item?.taxFlag ? "（税別）" : "（税込）"}
                    </span>
                  </div>
                  <div className="caption">
                    {item.Item?.itemCaption.slice(0, 200) + "..."}
                  </div>
                  <div className="review">
                    <span>レビュー件数:{item.Item?.reviewCount}</span>
                    <span>レビュー平均:{item.Item?.reviewAverage}</span>
                  </div>
                  <div className="shop">
                    <a href={item.Item?.shopUrl}>{item.Item?.shopName}</a>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Items;
