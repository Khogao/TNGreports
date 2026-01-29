export default function LegalBasis() {
    const legalItems = [
        {
            number: 1,
            text: "Giấy chấp thuận đầu tư: Quy mô đầu tư: 6.000m³ sản phẩm ván ghép thanh và 220.000 tấn viên nén gỗ/năm. Tổng vốn đầu tư 730 tỷ."
        },
        {
            number: 2,
            text: "Hợp đồng thuê đất/giấy chứng nhận quyền sử dụng đất: (24.240+18.942) 42.182m², giá đất 600.000VNĐ/m². Thời hạn thuê đến 26/08/2070 (45.5 năm)."
        },
        {
            number: 3,
            text: "Giấy phép môi trường ngày 29/06/2025, thời hạn 10 năm"
        },
        {
            number: 4,
            text: "Giấy chứng nhận thẩm duyệt thiết kế pccc ngày 17/5/2021 và ngày 28/07/2025."
        },
        {
            number: 5,
            text: "Giấy phép xây dựng ngày 21/08/2025."
        },
        {
            number: 6,
            text: "Công văn thoả thuận điều chỉnh thiết kế tổng mặt bằng và đấu nối hạ tầng kỹ thuật của BQL Khu Kinh Tế - tỉnh Quảng Trị - 25/6/2025"
        },
        {
            number: 7,
            text: "Hợp đồng mua thiết bị_DSE (9.100.000 EUR) chưa bao gồm thuế nhập khẩu và các loại chi phí khác."
        },
        {
            number: 8,
            text: "Hợp đồng mua thiết bị_Kahl (3.500.000 EUR)"
        },
        {
            number: 9,
            text: "Hợp đồng mua thiết bị của GGS – 4 silo 4.500m³ và thiết bị đi kèm (940.000 EUR)"
        },
        {
            number: 10,
            text: "Hợp đồng lắp đặt thiết bị DSE ASIA (750.000 EUR)"
        }
    ];

    return (
        <section className="section fade-in">
            <div className="section-header">
                <div className="section-icon">📋</div>
                <h2 className="section-title">CƠ SỞ PHÁP LÝ</h2>
            </div>
            <ul className="item-list">
                {legalItems.map((item) => (
                    <li key={item.number} className="list-item slide-in">
                        <span className="list-item-number">{item.number}.</span>
                        <span className="list-item-text">{item.text}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
