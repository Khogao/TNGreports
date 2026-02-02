import React, { useState } from 'react';
import { AlertTriangle, Clock, Users, CheckCircle, Target, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const ActionPlanPage = () => {
    const [expandedPhase, setExpandedPhase] = useState(1);

    const criticalIssues = [
        { id: "C1", issue: "Thiếu hụt Nguyên liệu FSC 97%", impact: "NPV = 0", owner: "Nam Phát + Hội Nông dân" },
        { id: "C2", issue: "Không có Tổng thầu EPC", impact: "Không vận hành được", owner: "Nam Phát" },
        { id: "C3", issue: "Sai lệch Năng lực Cốt lõi", impact: "Rủi ro quản trị", owner: "HĐQT Thịnh Nguyên" },
        { id: "C4", issue: "Tài chính chưa minh bạch", impact: "Vỡ dòng tiền", owner: "CFO Nam Phát" },
    ];

    const highIssues = [
        { id: "H1", issue: "Phá dỡ bắt buộc 4 nhà xưởng", impact: "Đội vốn 10-50 tỷ", owner: "Nhà thầu XD" },
        { id: "H2", issue: "Sai lệch QCVN 02-2022/BXD", impact: "Chậm COD 6-12 tháng", owner: "Tư vấn TK" },
        { id: "H3", issue: "Độ trễ tích hợp thiết bị", impact: "IRR giảm 2-3%", owner: "PM dự án" },
        { id: "H4", issue: "Thị trường Hàn Quốc suy giảm", impact: "Doanh thu giảm 10-15%", owner: "Kinh doanh" },
        { id: "H5", issue: "Chi phí thiết bị chưa đầy đủ", impact: "Vượt CAPEX 25-50 tỷ", owner: "CFO" },
    ];

    const actionPlan = {
        1: {
            name: "Tháo gỡ CRITICAL",
            timeline: "0-30 ngày",
            color: "rose",
            actions: [
                { id: "A1.1", action: "Khảo sát FSC trong bán kính 100km", deadline: "D+14", owner: "Nam Phát + UBND", deliverable: "Báo cáo FSC", status: "pending" },
                { id: "A1.2", action: "Tuyển Giám đốc Vận hành", deadline: "D+21", owner: "HR Thịnh Nguyên", deliverable: "Shortlist 3 ứng viên", status: "pending" },
                { id: "A1.3", action: "Lập lại bảng CAPEX chi tiết", deadline: "D+21", owner: "CFO", deliverable: "Báo cáo CAPEX", status: "pending" },
                { id: "A1.4", action: "Đàm phán chỉ định nhà tích hợp SI", deadline: "D+30", owner: "PM dự án", deliverable: "Hợp đồng SI/LOI", status: "pending" },
            ]
        },
        2: {
            name: "Tháo gỡ HIGH",
            timeline: "30-90 ngày",
            color: "amber",
            actions: [
                { id: "A2.1", action: "Dự toán phá dỡ & xây mới KH01-06", deadline: "D+45", owner: "Nhà thầu XD", deliverable: "Báo giá chi tiết", status: "pending" },
                { id: "A2.2", action: "Rà soát thiết kế QCVN 02-2022", deadline: "D+60", owner: "Tư vấn TK", deliverable: "Báo cáo tuân thủ", status: "pending" },
                { id: "A2.3", action: "Đàm phán tiến độ GGS (18→15 tháng)", deadline: "D+45", owner: "Procurement", deliverable: "Amendment HĐ", status: "pending" },
                { id: "A2.4", action: "Kịch bản không có thị trường Hàn", deadline: "D+30", owner: "Kinh doanh", deliverable: "Mô hình TC mới", status: "pending" },
                { id: "A2.5", action: "Xác nhận thuế NK + vận chuyển", deadline: "D+30", owner: "CFO", deliverable: "Bảng tổng hợp", status: "pending" },
            ]
        },
        3: {
            name: "Tháo gỡ MEDIUM",
            timeline: "90-180 ngày",
            color: "sky",
            actions: [
                { id: "A3.1", action: "Bổ sung chi phí thuê đất", deadline: "D+45", owner: "Kế toán", deliverable: "Mô hình cập nhật", status: "pending" },
                { id: "A3.2", action: "Kiểm tra tương thích điện", deadline: "D+60", owner: "Kỹ thuật", deliverable: "Báo cáo kỹ thuật", status: "pending" },
                { id: "A3.3", action: "Tuyển đội vận hành 10-15 người", deadline: "D+120", owner: "HR", deliverable: "Offer signed", status: "pending" },
                { id: "A3.4", action: "Lộ trình chứng nhận FSC/SBP", deadline: "D+180", owner: "ESG", deliverable: "Roadmap FSC", status: "pending" },
            ]
        }
    };

    const decisionGates = [
        { condition: "Diện tích FSC ≥ 50% mục tiêu (2.500ha)", checked: false },
        { condition: "Có Hợp đồng với Nhà tích hợp SI", checked: false },
        { condition: "Báo cáo CAPEX được phê duyệt (< 10%)", checked: false },
        { condition: "Có ứng viên Giám đốc Vận hành", checked: false },
    ];

    const getColorClasses = (color) => ({
        rose: { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", badge: "bg-rose-500" },
        amber: { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", badge: "bg-amber-500" },
        sky: { bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-700", badge: "bg-sky-500" },
    }[color]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            {/* Header */}
            <div className="bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-slate-900 text-white p-3 rounded-xl">
                            <Target className="w-8 h-8" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900">Action Plan - Dự án Nam Phát</h1>
                            <p className="text-slate-600">Danh mục vấn đề cần tháo gỡ | Ngày lập: 29/01/2026</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

                {/* Issues Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Critical Issues */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="bg-rose-500 text-white px-6 py-4 flex items-center gap-3">
                            <AlertTriangle className="w-6 h-6" />
                            <div>
                                <h2 className="text-xl font-bold">CRITICAL</h2>
                                <p className="text-rose-100 text-sm">Chặn Go/No-Go</p>
                            </div>
                        </div>
                        <div className="p-4 space-y-3">
                            {criticalIssues.map(item => (
                                <div key={item.id} className="bg-rose-50 border border-rose-100 rounded-lg p-4">
                                    <div className="flex items-start gap-3">
                                        <span className="bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded">{item.id}</span>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-slate-900">{item.issue}</h3>
                                            <div className="flex items-center gap-4 mt-2 text-sm">
                                                <span className="text-rose-600 font-medium">{item.impact}</span>
                                                <span className="text-slate-500">• {item.owner}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* High Issues */}
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        <div className="bg-amber-500 text-white px-6 py-4 flex items-center gap-3">
                            <Clock className="w-6 h-6" />
                            <div>
                                <h2 className="text-xl font-bold">HIGH</h2>
                                <p className="text-amber-100 text-sm">Ảnh hưởng nghiêm trọng NPV/IRR</p>
                            </div>
                        </div>
                        <div className="p-4 space-y-3">
                            {highIssues.map(item => (
                                <div key={item.id} className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                                    <div className="flex items-start gap-3">
                                        <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">{item.id}</span>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-slate-900">{item.issue}</h3>
                                            <div className="flex items-center gap-4 mt-2 text-sm">
                                                <span className="text-amber-600 font-medium">{item.impact}</span>
                                                <span className="text-slate-500">• {item.owner}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Action Plan */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-slate-900 text-white px-6 py-4 flex items-center gap-3">
                        <Calendar className="w-6 h-6" />
                        <h2 className="text-xl font-bold">ACTION PLAN</h2>
                    </div>

                    <div className="divide-y divide-slate-200">
                        {Object.entries(actionPlan).map(([phase, data]) => {
                            const colors = getColorClasses(data.color);
                            const isExpanded = expandedPhase === parseInt(phase);

                            return (
                                <div key={phase}>
                                    <button
                                        onClick={() => setExpandedPhase(isExpanded ? null : parseInt(phase))}
                                        className={`w-full px-6 py-4 flex items-center justify-between ${colors.bg} hover:opacity-90 transition-all`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={`${colors.badge} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                                                Phase {phase}
                                            </span>
                                            <span className={`font-semibold ${colors.text}`}>{data.name}</span>
                                            <span className="text-slate-500 text-sm">({data.timeline})</span>
                                        </div>
                                        {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                                    </button>

                                    {isExpanded && (
                                        <div className="p-4">
                                            <table className="w-full">
                                                <thead>
                                                    <tr className="text-left text-sm text-slate-500 border-b border-slate-200">
                                                        <th className="pb-3 font-medium">Action</th>
                                                        <th className="pb-3 font-medium">Mô tả</th>
                                                        <th className="pb-3 font-medium">Deadline</th>
                                                        <th className="pb-3 font-medium">Owner</th>
                                                        <th className="pb-3 font-medium">Deliverable</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-100">
                                                    {data.actions.map(action => (
                                                        <tr key={action.id} className="hover:bg-slate-50">
                                                            <td className="py-3">
                                                                <span className={`${colors.badge} text-white text-xs font-bold px-2 py-1 rounded`}>{action.id}</span>
                                                            </td>
                                                            <td className="py-3 text-slate-900">{action.action}</td>
                                                            <td className="py-3">
                                                                <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-sm font-mono">{action.deadline}</span>
                                                            </td>
                                                            <td className="py-3 text-slate-600">{action.owner}</td>
                                                            <td className="py-3 text-slate-600">{action.deliverable}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Decision Gate */}
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="bg-emerald-600 text-white px-6 py-4 flex items-center gap-3">
                        <CheckCircle className="w-6 h-6" />
                        <div>
                            <h2 className="text-xl font-bold">Decision Gate</h2>
                            <p className="text-emerald-100 text-sm">Deadline: D+30 (28/02/2026)</p>
                        </div>
                    </div>

                    <div className="p-6">
                        <h3 className="font-semibold text-slate-700 mb-4">Điều kiện chuyển từ NO-GO → Conditional GO:</h3>
                        <div className="space-y-3">
                            {decisionGates.map((gate, i) => (
                                <label key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-all">
                                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                                    <span className="text-slate-700">{gate.condition}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center text-slate-500 text-sm py-4">
                    Người lập: Ban Thẩm định (Trần Quang Toán, Lê Nguyên Phi, Phạm Thiện)
                </div>
            </div>
        </div>
    );
};

export default ActionPlanPage;
