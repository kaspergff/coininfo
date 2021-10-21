interface Data {
    count: number;
    name: string;
    price: number;
    volume_1day_usd: number;
}

const SingleCoinInfoRow = (data: Data) => {
    return (
        <tr>
            <th scope="row">{data.count}</th>
            <td>{data.name}</td>
            <td>${formatNumber(data.price)}</td>
            <td>${formatNumber(data.volume_1day_usd)}</td>
        </tr>
    );
};
export default SingleCoinInfoRow;

const formatNumber = (num: number) => {
    return num.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};
