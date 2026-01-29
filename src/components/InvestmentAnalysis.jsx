export default function InvestmentAnalysis() {
    return (
        <section className="section fade-in" style={{ borderLeft: '5px solid var(--accent-color)' }}>
            <div className="section-header">
                <div className="section-icon" style={{ background: 'var(--gradient-2)' }}>⚠️</div>
                <h2 className="section-title">V. ĐÁNH GIÁ & KHUYẾN NGHỊ ĐẦU TƯ</h2>
            </div>

            <div className="alert-box" style={{
                padding: 'var(--spacing-md)',
                background: '#fee2e2',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-lg)',
                border: '1px solid #fecaca',
                color: '#991b1b'
            }}>
                <h3 style={{ margin: '0 0 var(--spacing-sm) 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    🛑 CÁC VẤN ĐỀ TRỌNG YẾU CẦN LƯU Ý
                </h3>
                <p style={{ margin: 0 }}>
                    <strong>KIẾN NGHỊ HĐQT: DỪNG CẤP VỐN (STOP INVESTMENT).</strong> Dựa trên dữ liệu hồ sơ, Ban Thẩm định kiến nghị dừng dự án để bảo toàn nguồn lực, tránh rủi ro quản trị khi lấn sân sang lĩnh vực không cốt lõi.
                </p>
            </div>

            <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>

                {/* Financial Risks */}
                <div className="card" style={{ background: 'var(--bg-secondary)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ color: '#dc2626', marginBottom: 'var(--spacing-sm)' }}>1. Rủi ro Tài chính</h3>
                    <ul className="item-list" style={{ gap: 'var(--spacing-xs)' }}>
                        <li className="list-item" style={{ borderLeftColor: '#dc2626' }}>
                            <strong>Thiếu chi phí thuê đất:</strong> File tính toán 20.04.2023 chưa bao gồm dòng tiền thuê đất đến năm 2070.
                        </li>
                        <li className="list-item" style={{ borderLeftColor: '#dc2626' }}>
                            <strong>Chi phí liên quan thiết bị:</strong> Hợp đồng 12.6M EUR chưa gồm thuế nhập khẩu & phí vận chuyển. Nguy cơ vượt tổng mức đầu tư từ 5-10%.
                        </li>
                        <li className="list-item" style={{ borderLeftColor: '#dc2626' }}>
                            <strong>Chênh lệch vốn:</strong> Vốn đầu tư 730 tỷ &gt; Tổng thiết bị ~433 tỷ. Cần giải trình 300 tỷ chênh lệch.
                        </li>
                    </ul>
                </div>

                {/* Construction Risks */}
                <div className="card" style={{ background: 'var(--bg-secondary)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ color: '#d97706', marginBottom: 'var(--spacing-sm)' }}>2. Rủi ro Xây dựng</h3>
                    <ul className="item-list" style={{ gap: 'var(--spacing-xs)' }}>
                        <li className="list-item" style={{ borderLeftColor: '#d97706' }}>
                            <strong>Phá dỡ bắt buộc:</strong> Công văn 25/6/2025 yêu cầu đập bỏ KH01, KH02, KH04, KH06.
                        </li>
                        <li className="list-item" style={{ borderLeftColor: '#d97706' }}>
                            <strong>Chi phí phát sinh:</strong> Chi phí phá dỡ & xây mới chưa rõ đã tính trong Tổng mức đầu tư chưa?
                        </li>
                    </ul>
                </div>

                {/* Governance Risks */}
                <div className="card" style={{ background: 'var(--bg-secondary)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)' }}>
                    <h3 style={{ color: '#b91c1c', marginBottom: 'var(--spacing-sm)' }}>3. Rủi ro Quản trị</h3>
                    <ul className="item-list" style={{ gap: 'var(--spacing-xs)' }}>
                        <li className="list-item" style={{ borderLeftColor: '#b91c1c' }}>
                            <strong>Sai lệch Năng lực Cốt lõi:</strong> Tập đoàn Thịnh Nguyên là cty Bất động sản, thiếu năng lực & kinh nghiệm về Sản xuất Công nghiệp.
                        </li>
                        <li className="list-item" style={{ borderLeftColor: '#b91c1c' }}>
                            <strong>Rủi ro Vận hành:</strong> Khả năng quản lý dây chuyền công nghệ cao (KAHL) chưa có cơ sở đánh giá rõ ràng.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card mt-md" style={{ background: 'var(--bg-secondary)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)' }}>
                <h3 style={{ color: '#b91c1c', marginBottom: 'var(--spacing-sm)' }}>4. Rủi ro Tài chính trọng yếu</h3>
                <ul className="item-list" style={{ gap: 'var(--spacing-xs)' }}>
                    <li className="list-item" style={{ borderLeftColor: '#b91c1c' }}>
                        <strong>Bài toán chưa minh bạch:</strong> Thiếu sự rõ ràng giữa các hạng mục <strong>đã đầu tư</strong> và các hạng mục <strong>CẦN đầu tư thêm</strong> để đạt trạng thái sản xuất ổn định.
                    </li>
                    <li className="list-item" style={{ borderLeftColor: '#b91c1c' }}>
                        <strong>Chi phí ẩn:</strong> Nguy cơ phát sinh chi phí "ngầm" chưa được ghi nhận trong tổng mức đầu tư ban đầu, dẫn đến vỡ phương án dòng tiền.
                    </li>
                </ul>
            </div>

            <div className="card mt-md" style={{ background: 'linear-gradient(to right, #f0fdf4, #dcfce7)', border: '1px solid #86efac', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={{ fontSize: '1.5em', marginRight: '10px' }}>🌍</span>
                    <h3 style={{ color: '#166534', margin: 0 }}>Cơ hội ESG & Tín chỉ Carbon (Đánh giá Thêm)</h3>
                </div>

                <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
                    <div>
                        <h4 style={{ color: '#15803d', marginBottom: '10px' }}>✅ Tiềm năng Thị trường</h4>
                        <ul className="item-list" style={{ gap: 'var(--spacing-xs)' }}>
                            <li className="list-item" style={{ borderLeftColor: '#15803d' }}>
                                <strong>Thị trường EU/Japan:</strong> Giá tín chỉ Carbon cao (€80/tấn), nhu cầu xanh hóa chuỗi cung ứng lớn.
                            </li>
                            <li className="list-item" style={{ borderLeftColor: '#15803d' }}>
                                <strong>Green Premium:</strong> Giá bán có thể tăng 10-15% nếu có chứng chỉ bền vững.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: '#b91c1c', marginBottom: '10px' }}>❌ Thực trạng Dự án (Cơ hội bị Bỏ lỡ)</h4>
                        <ul className="item-list" style={{ gap: 'var(--spacing-xs)' }}>
                            <li className="list-item" style={{ borderLeftColor: '#b91c1c' }}>
                                <strong>Không có FSC:</strong> Đồng nghĩa với việc không thể xác nhận nguồn gốc Carbon, mất hoàn toàn doanh thu từ tín chỉ.
                            </li>
                            <li className="list-item" style={{ borderLeftColor: '#b91c1c' }}>
                                <strong>Hiệu suất thấp:</strong> Máy móc rời rạc tiêu tốn năng lượng, làm tăng phát thải gián tiếp (Scope 2).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="subsection mt-md">
                <h3 className="subsection-title">3. Khuyến nghị Kỹ thuật</h3>
                <div className="question-content">
                    <p className="list-item-text">
                        <strong>Sai lệch QCVN:</strong> Số liệu thiết kế không phù hợp QCVN 02-2022/BXD. Rủi ro không được nghiệm thu PCCC và Xây dựng.
                    </p>
                    <p className="list-item-text mt-md">
                        <strong>Đồng bộ điện lưới:</strong> Cần xác nhận ngay điện áp/tần số của thiết bị DSE (Châu Âu) để tương thích với lưới điện 50Hz/380V Việt Nam.
                    </p>
                </div>
            </div>

        </section>
    );
}
