import Layouts from "../components/layouts";
import { useState } from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import data from "../utils/deadlineReklame.json";
import FormRegister from "../components/RegistrationForm/FormRegister";
import ListReklame from "../components/RegistrationForm/ListReklame";
import ReklameModal from "../components/RegistrationForm/ReklameModal";
import { Link } from "react-router-dom";
import dataMutation from "../utils/dataMutation";
import useFetch from "../utils/useFetch";

const RegistrationForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [nama_reg, setNama_reg] = useState("");
  const [nik_reg, setNik_reg] = useState("");
  const [npwp_reg, setNpwp_reg] = useState("");
  const [nama_perusahaan, setNama_perusahaan] = useState("");
  const [alamat_perusahaan, setAlamat_perusahaan] = useState("");
  const [no_telp, setNo_telp] = useState("");
  const [expired_date, setExpired_date] = useState("2022-12-25");

  const handleRegister = async () => {
    const body = {
      nama_reg,
      nik_reg,
      npwp_reg,
      nama_perusahaan,
      alamat_perusahaan,
      no_telp,
      expired_date,
    };

    const res = await dataMutation("/api/reklame", body, "POST");
    console.log(res);
  };

  return (
    <Layouts>
      <p className="pt-7 px-7 text-xl font-semibold flex items-center gap-3">
        <Link to={"/pendataan"}>
          <IoChevronBackSharp className="mt-1 cursor-pointer hover:text-2xl hover:text-primary" />{" "}
        </Link>
        <span>Data Reklame</span>
      </p>

      {/* Form Register */}
      <FormRegister
        alamat_perusahaan={alamat_perusahaan}
        expired_date={expired_date}
        nama_reg={nama_reg}
        nik_reg={nik_reg}
        npwp_reg={npwp_reg}
        no_telp={no_telp}
        nama_perusahaan={nama_perusahaan}
        setAlamat_perusahaan={setAlamat_perusahaan}
        setExpired_date={setExpired_date}
        setNik_reg={setNik_reg}
        setNo_telp={setNo_telp}
        setNama_perusahaan={setNama_perusahaan}
        setNama_reg={setNama_reg}
        setNpwp_reg={setNpwp_reg}
      />

      {/* List Reklame */}
      {/* <ListReklame data={data} setShowModal={setShowModal} /> */}

      <div className="flex justify-end mx-7 gap-7">
        <button className="bg-white border border-primary mb-5 font-semibold flex justify-center items-center gap-3 text-primary rounded-md w-40 h-12">
          <span>Batal</span>
        </button>
        <button
          onClick={handleRegister}
          className="bg-primary mb-5 font-semibold flex justify-center items-center gap-3 text-white rounded-md w-40 h-12"
        >
          <span>Simpan</span>
        </button>
      </div>

      {/* Insert Reklame Modal */}

      {/* <ReklameModal setShowModal={setShowModal} showModal={showModal} /> */}
    </Layouts>
  );
};

export default RegistrationForm;
