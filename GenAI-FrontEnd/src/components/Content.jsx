// import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { axios } from '../axios/config'

Content.propTypes = {
  tabBarIndex: PropTypes.any.isRequired,
};

function Content({ tabBarIndex }) {
  const title = {
    fontSize: "30px",
    fontWeight: "bold",
  };

  const secondTitle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const card = {
    width: "100%",
    padding: "21px",
    borderRadius: "7px",
    border: "1px solid #E8E8E8",
  };

  // const customFlex = {
  //     display: "flex",

  // }

  return (
    <div
      className={`container ${
        tabBarIndex == 1 ? "flex flex-col" : "hidden md:flex md:flex-col"
      } md:w-1/2 lg:w-2/3 pt-16`}
    >
      <div
        className={`h-full max-h-screen overflow-y-auto px-10 mt-10 md:mt-3`}
      >
        <div className="section-1">
          <h1 style={title}>Ringkasan</h1>

          <div className="grid gap-3 mt-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
            <div style={card}>
              <h2 style={secondTitle}>Secara Kesimpulan</h2>
              <p className="mt-3">
                Pertama-tama anda harus menyiapkan berkas berkas untuk pembuatan
                surat pengantar ke dinas perdagangan terlebih dahulu
              </p>
            </div>
            <div style={card}>
              <h2 style={secondTitle}>Demi Kemudahan Anda</h2>
              <p className="mt-3">
                Saya menemukan cara setelah anda membuat surat pengantar untuk
                mengajukan berkas pembuatan SIUP lewat website
                dinasperdagangan.id
              </p>
            </div>
            <div style={card}>
              <h2 style={secondTitle}>Cara Alternatif</h2>
              <p className="mt-3">
                Cara alternatif dengan menggunakan jasa notaris untuk
                mempersingkat dan memudahkan proses pembuatan SIUP untuk usaha
                anda Klik disini untuk mencari notaris
              </p>
            </div>
          </div>
        </div>

        <div className="section-2 mt-4">
          <h1 style={title}>Saran untuk Hal-Hal yang harus anda lakukan</h1>
          <p>
            Jika anda telah melakukan hal hal dibawah, silahkan klik checkbox
            untuk melakukan evaluasi ulang
          </p>
          <div className="contentSection-2 mt-5">
            <div className="flex">
              <input type="checkbox" />
              <p className="ml-3">
                Membuat Surat pengajuan pengantar ke Dinas Perdangangan kota
                Depok
              </p>
            </div>
            <div className="flex mt-1">
              <input type="checkbox" className="self-start" />
              <div className="ml-3">
                <p>
                  Datang langsung ke kantor Dinas Perdagangan sesuai domisili
                  dengan membawa persyaratan yang diperlukan :{" "}
                </p>
                <p>a. Fotokopi identitas diri (KTP) </p>
                <p>b. Fotokopi NPWP</p>
                <p>c. Surat keterangan domisili atau SITU</p>
                <p>d. Neraca perusahaan</p>
                <p>
                  e. Surat perjanjian sewa-menyewa tanah bila tanah atau
                  bangunan usaha termasuk tanah sewa
                </p>
                <p>f. Fotokopi KTP pemilik tanah yang disewa</p>
                <p>g. Pas foto berwarna ukuran 3x4</p>
              </div>
            </div>
            <div className="flex mt-1">
              <input type="checkbox" />
              <p className="ml-3">
                Ambil dan isi formulir pendaftaran SIUP di kantor Dinas
                Perdagangan
              </p>
            </div>
            <div className="flex mt-1">
              <input type="checkbox" />
              <p className="ml-3">
                Berikan ke petugas dan tunggu pembuatan SIUP selesai
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
