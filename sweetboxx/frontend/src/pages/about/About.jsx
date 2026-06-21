import React from "react";

export default function About() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "60px auto",
        padding: "0 20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#1F2937",
      }}
    >
      {/* Başlıq Hissə */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "800",
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          Haqqımızda
        </h2>
        <div
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#DE3B6A",
            margin: "0 auto",
            borderRadius: "2px",
          }}
        ></div>
        <p style={{ marginTop: "16px", color: "#6B7280", fontSize: "16px" }}>
          SweetBox: Sizin Şirin Qutu Emalatxananız
        </p>
      </div>

      {/* Əsas Məzmun */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          lineHeight: "1.8",
          fontSize: "15px",
        }}
      >
        about
        {/* Biz Kimik */}
        <div style={{ marginBottom: "32px" }}>
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#DE3B6A",
              marginBottom: "10px",
            }}
          >
            🕵️‍♀️ Biz Kimik?
          </h4>
          <p style={{ color: "#4B5563", textAlign: "justify" }}>
            <strong>SweetBox</strong> – şirniyyatsevərlər və sevdiklərinə şirin
            bir sürpriz etmək istəyənlər üçün yaradılmış innovativ onlayn
            platformadır. Biz, standart və tərkibini dəyişə bilmədiyiniz hazır
            şirniyyat qutularından sıxılanlar üçün tamamilə fərqli bir konsept
            təklif edirik. SweetBox-da hər bir istifadəçi öz zövqünə uyğun
            dadları bir araya gətirərək özünün unikal şirniyyat qutusunu
            sıfırdan dizayn edə bilir.
          </p>
        </div>
        {/*Sistem Necə İşləyir */}
        <div style={{ marginBottom: "32px" }}>
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#DE3B6A",
              marginBottom: "10px",
            }}
          >
            🧁 Yalnız Sizin Sevdiyiniz Dadlar!
          </h4>
          <p style={{ color: "#4B5563", textAlign: "justify" }}>
            Hər kəsin dad zövqü fərqlidir – kimisə şokolad vurğunudur, kimisə
            isə rəngarəng marmeladları və ya karamelləri sevir. Bizim
            platformada heç bir məhdudiyyət yoxdur! İstifadəçilər menyudan keçid
            edərək yalnız və yalnız özlərinin (yaxud hədiyyə edəcəkləri şəxsin)
            sevdiyi şirniyyat növlərini seçib qutuya əlavə edirlər.
            İstəmədiyiniz, sevmədiyiniz heç bir dad sizin qutunuzda yer almır.
            Bir neçə kliklə hazırlanan bu şirin qutular, xüsusi və estetik
            qablaşdırma ilə birbaşa ünvanınıza çatdırılır.
          </p>
        </div>
        {/* Missiyamız */}
        <div style={{ marginBottom: "32px" }}>
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "700",
              color: "#DE3B6A",
              marginBottom: "10px",
            }}
          >
            🎯 Bizim Missiyamız
          </h4>
          <p style={{ color: "#4B5563", textAlign: "justify" }}>
            Əsas hədəfimiz, texnologiyanın gücü ilə şirniyyat alış-verişini daha
            əyləncəli, fərdi və interaktiv bir formaya gətirməkdir.
            Müştərilərimizə həm vizual olaraq gözəl, həm də dad olaraq tam
            onların istəyinə cavab verən yüksək keyfiyyətli xidmət göstərməkdən
            qürur duyuruq.
          </p>
        </div>
        {/* Sonluq Şüar */}
        <div
          style={{
            borderTop: "1px solid #F3F4F6",
            paddingTop: "24px",
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <p
            style={{ fontStyle: "italic", color: "#9CA3AF", fontSize: "16px" }}
          >
            "SweetBox – Öz qutunu özün doldur, gününü şirinləşdir!"
          </p>
        </div>
      </div>
    </div>
  );
}
