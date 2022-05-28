<template>
  <div class="app-container">
    <div class="app-breadcrumb">
      <div class="app-breadcrumb-wrap grid">
        <div class="app-breadcrumb-container row">
          <div class="col l-12 m-12 c-12">
            <div
              class="app-breadcrumb-content"
              style="
                background-image: url('/fontend/asset/images/source/o-BAKING-TOOLS-facebook.jpg');
              "
            >
              <div class="app-breadcrumb-content-title">
                <a href="/" class="app-breadcrumb-content-title-link">
                  <span>Trang Chủ</span>
                </a>
                <span class="app-breadcrumb-content-title-slash">/</span>
                <a
                  href="./contact.html"
                  class="app-breadcrumb-content-title-link"
                >
                  <span>Liên Hệ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-contact">
      <div class="app-contact-wrap grid wide">
        <div class="app-contact-container row">
          <div class="app-contact-form col l-6 m-6 c-12">
            <div class="app-contact-form-wrap">
              <form action="">
                <div class="app-contact-form-line">
                  <h3>Gửi Ý Kiến Của Bạn</h3>
                </div>
                <div class="app-contact-form-line">
                  <label for="contactFormName" class="app-contact-form-label"
                    >Tên Của Bạn <span>(*)</span></label
                  >
                  <input
                    type="text"
                    id="contactFormName"
                    class="app-contact-form-input"
                  />
                </div>
                <div class="app-contact-form-line">
                  <label for="contactFormEmail" class="app-contact-form-label"
                    >Email <span>(*)</span></label
                  >
                  <input
                    type="email"
                    id="contactFormEmail"
                    class="app-contact-form-input"
                  />
                </div>
                <div class="app-contact-form-line">
                  <label for="contactFormPhone" class="app-contact-form-label"
                    >Điện Thoại<span>(*)</span></label
                  >
                  <input
                    type="number"
                    id="contactFormPhone"
                    class="app-contact-form-input"
                  />
                </div>
                <div class="app-contact-form-line">
                  <label for="contactFormOpinion" class="app-contact-form-label"
                    >Thông Điệp<span>(*)</span></label
                  >
                  <textarea
                    id="contactOpinion"
                    class="app-contact-form-textarea"
                  ></textarea>
                </div>
                <div class="app-contact-form-line">
                  <button type="submit" class="btn app-contact-form-btn">
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="app-contact-info col l-6 m-6 c-12">
            <div class="app-contact-info-wrap">
              <div class="app-contact-info-header">
                <h3>Thông Tin Liên Hệ</h3>
              </div>
              <div class="app-contact-info-content">
                <div class="app-contact-info-content-description">
                  <p>
                    Chúng tôi muốn nghe ý kiến của bạn về dịch vụ khách hàng,
                    hàng hóa, trang web của chúng tôi hoặc bất kỳ chủ đề nào bạn
                    muốn chia sẻ với chúng tôi. Ý kiến và đề xuất của bạn sẽ
                    được đánh giá cao. Hãy hoàn thành mẫu đơn dưới dây.
                  </p>
                </div>
                <div class="app-contact-info-content-address">
                  <span class="app-contact-info-content-address-icon"
                    ><i class="ti-location-pin"></i
                  ></span>
                  <span class="app-contact-info-content-address"
                    >Pháo Đài Láng, Láng Thượng, Hà Nội, Việt Nam</span
                  >
                </div>
                <div class="app-contact-info-content-phone">
                  <span class="app-contact-info-content-phone-icon"
                    ><i class="ti-mobile"></i
                  ></span>
                  <span class="app-contact-info-content-phone"
                    >086.8085.632</span
                  >
                </div>
                <div class="app-contact-info-content-email">
                  <span class="app-contact-info-content-email-icon"
                    ><i class="ti-email"></i
                  ></span>
                  <span class="app-contact-info-content-email"
                    >nguyenvanvinhhy2k@gmail.com</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
};
</script>

<style scoped></style>
