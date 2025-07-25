export async function submitToSheet(data: {
  name: string;
  email: string;
  comments: string;
}): Promise<boolean> {
  try {
    const formData = new URLSearchParams();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("comments", data.comments);

    const res = await fetch("https://script.google.com/macros/s/AKfycbxJoF-1bR6V5Vm5sRGpb4oHkUCstChiAGVE_iUf0oK8LqQmmnaH2wRaiW9Kb_je_5oT/exec", {
      method: "POST",
      body: formData,
    });

    return res.ok;
  } catch (err) {
    console.error("Submit to Google Sheets failed:", err);
    return false;
  }
}
