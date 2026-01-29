import ReportHeader from './components/ReportHeader'
import LegalBasis from './components/LegalBasis'
import FinancialSection from './components/FinancialSection'
import ConstructionPlanning from './components/ConstructionPlanning'
import DesignCriteria from './components/DesignCriteria'
import ScopeOfWork from './components/ScopeOfWork'
import InvestmentAnalysis from './components/InvestmentAnalysis'

function App() {
  return (
    <div className="app">
      <ReportHeader />

      <main className="main-content">
        <div className="container">
          {/* Table of Contents */}
          <section className="section fade-in">
            <h2 className="section-title text-center">MỤC LỤC</h2>
            <div className="question-content">
              <ul className="item-list">
                <li className="list-item">
                  <a href="#legal-basis" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className="list-item-number">🔹</span>
                    <span className="list-item-text">Cơ sở pháp lý</span>
                  </a>
                </li>
                <li className="list-item">
                  <a href="#financial" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className="list-item-number">🔹</span>
                    <span className="list-item-text">I. Phần tài chính</span>
                  </a>
                </li>
                <li className="list-item">
                  <a href="#construction" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className="list-item-number">🔹</span>
                    <span className="list-item-text">II. Phần quy hoạch xây dựng</span>
                  </a>
                </li>
                <li className="list-item">
                  <a href="#design" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className="list-item-number">🔹</span>
                    <span className="list-item-text">III. Tiêu chí thiết kế</span>
                  </a>
                </li>
                <li className="list-item">
                  <a href="#scope" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span className="list-item-number">🔹</span>
                    <span className="list-item-text">IV. Phạm vi công việc</span>
                  </a>
                </li>
                <li className="list-item" style={{ background: '#fee2e2', borderLeftColor: '#dc2626' }}>
                  <a href="#analysis" style={{ textDecoration: 'none', color: '#991b1b', fontWeight: 'bold' }}>
                    <span className="list-item-number">⚠️</span>
                    <span className="list-item-text">V. ĐÁNH GIÁ & KHUYẾN NGHỊ</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Report Sections */}
          <div id="legal-basis">
            <LegalBasis />
          </div>

          <div id="financial">
            <FinancialSection />
          </div>

          <div id="construction">
            <ConstructionPlanning />
          </div>

          <div id="design">
            <DesignCriteria />
          </div>

          <div id="scope">
            <ScopeOfWork />
          </div>

          <div id="analysis">
            <InvestmentAnalysis />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="text-muted">
            © 2026 Dự án Nhà Máy sản xuất viên nén năng lượng - gỗ ván ghép thanh
          </p>
          <p className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>
            Khu Kinh Tế - Tỉnh Quảng Trị | Tổng vốn đầu tư: 730 tỷ
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
