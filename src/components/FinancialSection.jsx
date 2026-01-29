export default function FinancialSection() {
    return (
        <section className="section fade-in">
            <div className="section-header">
                <div className="section-icon">💰</div>
                <h2 className="section-title">I. PHẦN TÀI CHÍNH</h2>
            </div>

            <div className="question-group">
                <div className="question-title">
                    <span className="question-number">1</span>
                    Hợp đồng mua thiết bị_DSE (9.100.000 EUR)
                </div>
                <div className="question-content">
                    <p className="list-item-text">
                        Chưa bao gồm thuế nhập khẩu và các loại chi phí khác.
                    </p>
                </div>
            </div>

            <div className="question-group">
                <div className="question-title">
                    <span className="question-number">2</span>
                    Hợp đồng mua thiết bị_Kahl (3.500.000 EUR)
                </div>
                <div className="question-content">
                    <p className="list-item-text">
                        Chưa bao gồm thuế nhập khẩu và các loại chi phí khác.
                    </p>
                </div>
            </div>

            <div className="subsection">
                <h3 className="subsection-title">Câu hỏi chi tiết:</h3>

                <div className="question-group mt-md">
                    <div className="question-title">
                        <span className="question-number">1</span>
                        Chi phí thuê đất
                    </div>
                    <div className="question-content">
                        <p className="list-item-text">
                            Trong file tính toán chi phí "chiết xuất quảng trị" ngày 20.04.2023 chưa thấy chi phí thuê đất. Xin đề nghị làm rõ!
                        </p>
                    </div>
                </div>

                <div className="question-group">
                    <div className="question-title">
                        <span className="question-number">2</span>
                        Tổng giá trị hợp đồng thiết bị
                    </div>
                    <div className="question-content">
                        <div className="highlight-box">
                            <p className="highlight-text">
                                Tổng giá trị 4 hợp đồng mua sắm thiết bị và lắp đặt là 14.290.000 EUR
                            </p>
                            <div className="value-display">
                                <span className="value-label">Tương đương (tỷ giá 1EUR = 30,295.77 VNĐ):</span>
                                <span className="value-amount">432.926.553.300 VNĐ</span>
                            </div>
                        </div>
                        <p className="list-item-text mt-md">
                            Còn phải mua sắm thiết bị gì nữa không? Còn hợp đồng mua sắm thiết bị nào chưa liệt kê ra đây không?
                        </p>
                    </div>
                </div>

                <div className="question-group">
                    <div className="question-title">
                        <span className="question-number">3</span>
                        Giá trị tài sản hiện có
                    </div>
                    <div className="question-content">
                        <p className="list-item-text">
                            Cơ sở nào để tính giá trị tài sản hiện có 120 tỷ?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
