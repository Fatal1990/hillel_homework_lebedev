import data from "./MOCK_DATA.json";

export const newArr = data.map((item) => `<li>${item.id}</li>
<li>${item.name}</li>
<li>${item.age}</li>
<li>${item.email}</li>
<li>${item.country}</li>
<li>${item.company}</li>`);