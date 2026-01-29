# Hướng dẫn triển khai Báo cáo lên GitHub Pages

Để đưa báo cáo này lên mạng chia sẻ (miễn phí), bạn làm theo các bước sau:

## Bước 1: Tạo Repository trên GitHub
1. Đăng nhập vào [GitHub](https://github.com).
2. Tạo một Repository mới (ví dụ: `bao-cao-nam-phat`).
3. **Quan trọng:** Không chọn "Initialize with README", để repository trống.
4. Copy đường dẫn HTTPS của repository (ví dụ: `https://github.com/username/bao-cao-nam-phat.git`).

## Bước 2: Chạy lệnh Upload
1. Mở Terminal (PowerShell) tại thư mục dự án này.
2. Chạy đúng 2 lệnh sau (thay thế URL bằng link bạn vừa copy):

```powershell
git remote add origin <Dán_Link_Của_Bạn_Vào_Đây>
git push -u origin main
```

## Bước 3: Bật GitHub Pages
1. Vào phần **Settings** của repository trên GitHub.
2. Chọn mục **Pages** ở menu bên trái.
3. Ở phần **Source**, giữ nguyên `Deploy from a branch`.
4. Ở phần **Branch**, chọn `main` và folder `/ (root)`.
5. Bấm **Save**.
6. Chờ khoảng 1-2 phút, reload trang, bạn sẽ thấy link trang web (ví dụ: `https://username.github.io/bao-cao-nam-phat/`).

> **Lưu ý:** Trang web này sử dụng file `index.html` đã được tối ưu cho Offline và Mobile, nên nó sẽ chạy rất mượt trên mọi thiết bị.
