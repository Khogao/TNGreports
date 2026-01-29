export default function DesignCriteria() {
    return (
        <section className="section fade-in">
            <div className="section-header">
                <div className="section-icon">📐</div>
                <h2 className="section-title">III. TIÊU CHÍ THIẾT KẾ</h2>
            </div>

            <div className="question-group">
                <div className="question-title">
                    <span className="question-number">1</span>
                    Điều kiện thiết kế
                </div>
                <div className="question-content">
                    <p className="list-item-text mb-md">
                        Đề nghị làm rõ sự chưa phù hợp các điều kiện thiết kế so với điều kiện cụ thể của dự án!
                    </p>
                    <div className="highlight-box">
                        <p className="highlight-text">
                            Số liệu điều kiện tự nhiên thiết kế chưa phù hợp với quy chuẩn Việt Nam QCVN 02-2022/BXD
                        </p>
                    </div>
                </div>
            </div>

            <div className="question-group">
                <div className="question-title">
                    <span className="question-number">2</span>
                    Thông số kỹ thuật điện
                </div>
                <div className="question-content">
                    <p className="list-item-text">
                        Xin vui lòng làm rõ điện áp và tần số ở "HĐ mua thiết bị_DSE", phụ lục D-484173.000 A2 - 70.000 Electrics and Automation
                    </p>
                    <div className="mt-md">
                        <span className="badge-outline">Electrics and Automation</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
