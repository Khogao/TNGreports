export default function ConstructionPlanning() {
    return (
        <section className="section fade-in">
            <div className="section-header">
                <div className="section-icon">🏗️</div>
                <h2 className="section-title">II. PHẦN QUY HOẠCH XÂY DỰNG</h2>
            </div>

            <div className="question-content">
                <p className="list-item-text mb-md">
                    Theo công văn thoả thuận điều chỉnh thiết kế tổng mặt bằng và đấu nối hạ tầng kỹ thuật của BQL Khu Kinh Tế - tỉnh Quảng Trị - 25/6/2025 ghi:
                </p>

                <div className="highlight-box">
                    <p className="highlight-text">
                        Các nhà hiện có KH01, KH02, KH04, KH06 sẽ phải đập, xây mới theo công văn của BQL Khu Kinh Tế.
                    </p>
                </div>

                <div className="question-group mt-md">
                    <div className="question-title">
                        <span className="question-number">?</span>
                        Chi phí phá dỡ và xây mới
                    </div>
                    <div className="question-content">
                        <p className="list-item-text">
                            Xin vui lòng cho biết đã tính chi phí phá dỡ và xây mới 4 hạng mục này chưa?
                        </p>
                        <div className="mt-md">
                            <span className="badge">KH01</span>{" "}
                            <span className="badge badge-secondary">KH02</span>{" "}
                            <span className="badge">KH04</span>{" "}
                            <span className="badge badge-secondary">KH06</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
