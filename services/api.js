import axios from "axios";
import { BACKEND_URL } from "../constants";

export async function login(email, password, client) {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/${client}?email=${email}&password=${password}`
    );

    if (
      response.status === 200 &&
      response.data &&
      response.data.length === 1
    ) {
      const client = response.data[0];
      return { ok: true, client: client };
    } else {
      return { ok: false, error: "خطأ في تسجيل الدخول تأكد من معلوماتك" };
    }
  } catch (error) {
    return { ok: false, error: "خطأ في تسجيل الدخول تأكد من اتصالك بالانترنت" };
  }
}

export async function signup(email, password, id_number) {
  try {
    const response = await axios.post(`${BACKEND_URL}/users`, {
      id_number,
      name: "",
      email,
      phone_number: "",
      password,
      medicines: [],
    });

    if (response.status === 201) {
      const user = response.data;
      return { ok: true, client: user };
    } else {
      let errorMessage = "حدث خطأ أثناء إنشاء المستخدم";
      if (
        response.status === 400 &&
        response.data &&
        response.data.error === "Email already exists"
      ) {
        errorMessage = "البريد الإلكتروني مستخدم بالفعل";
      }
      return { ok: false, error: errorMessage };
    }
  } catch (error) {
    return { ok: false, error: "حدث خطأ أثناء إنشاء المستخدم" };
  }
}

export async function saveMedicines(user_id, medicines) {
  try {
    const response = await axios.patch(`${BACKEND_URL}/users/${user_id}`, {
      medicines: medicines,
    });
    if (response.status === 200 && response.data) {
      const savedMedicines = response.data.medicines;
      return { ok: true, medicines: savedMedicines };
    } else {
      return { ok: false, error: "حدث خطأ في حفظ أدويتك حاول مرة اخرا لاحقاً" };
    }
  } catch (error) {
    return { ok: false, error: "خطأ في عملية الحفظ تأكد من اتصالك بالانترنت" };
  }
}

export async function saveName(user_id, name) {
  try {
    const response = await axios.patch(`${BACKEND_URL}/users/${user_id}`, {
      name,
    });
    if (response.status === 200 && response.data) {
      const savedName = response.data.name;
      return { ok: true, name: savedName };
    } else {
      return {
        ok: false,
        error: "حدث خطأ في عملية الحفظ حاول مرة اخرا لاحقاً",
      };
    }
  } catch (error) {
    return { ok: false, error: "خطأ في عملية الحفظ تأكد من اتصالك بالانترنت" };
  }
}

export async function saveEmail(user_id, email) {
  try {
    const response = await axios.patch(`${BACKEND_URL}/users/${user_id}`, {
      email,
    });
    if (response.status === 200 && response.data) {
      const savedEmail = response.data.email;
      return { ok: true, email: savedEmail };
    } else {
      return {
        ok: false,
        error: "حدث خطأ في عملية الحفظ حاول مرة اخرا لاحقاً",
      };
    }
  } catch (error) {
    return { ok: false, error: "خطأ في عملية الحفظ تأكد من اتصالك بالانترنت" };
  }
}

export async function savePhone(user_id, phone_number) {
  try {
    const response = await axios.patch(`${BACKEND_URL}/users/${user_id}`, {
      phone_number,
    });
    if (response.status === 200 && response.data) {
      const savedPhone = response.data.phone_number;
      return { ok: true, phone_number: savedPhone };
    } else {
      return {
        ok: false,
        error: "حدث خطأ في عملية الحفظ حاول مرة اخرا لاحقاً",
      };
    }
  } catch (error) {
    return { ok: false, error: "خطأ في عملية الحفظ تأكد من اتصالك بالانترنت" };
  }
}

// Get all medicines that a certain user is use it.
export async function getUserMedicines(ids) {
  const medicines = [];

  for (const id of ids) {
    const response = await axios.get(
      `${BACKEND_URL}/medicines/${id.toString()}`
    );
    const medicine = response.data;
    medicines.push(medicine);
  }
  console.log(medicines);
  return medicines;
}

export async function getAllMedicines() {
  const response = await axios.get(BACKEND_URL + "/medicines");

  const medicines = response.data.map((medicineItem) => ({
    id: medicineItem.id,
    name: medicineItem.name,
    scientific_name: medicineItem.scientific_name,
    price: medicineItem.price,
    available_in: medicineItem.available_in,
    use_for: medicineItem.use_for,
    photo: medicineItem.photo,
  }));
  return medicines;
}

//Get all pharmacies that a certain medicine is available in
export async function getMedicinePharmacies(ids) {
  const pharmacies = [];

  for (const id of ids) {
    const response = await axios.get(
      `${BACKEND_URL}/pharmacies/${id.toString()}`
    );
    const pharmacy = response.data;
    pharmacies.push(pharmacy);
  }

  return pharmacies;
}
