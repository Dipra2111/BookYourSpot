// import { useState } from "react";
// import axios from "axios";

// export default function Addhotel() {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     // imgSrc: "",
//     destination: "",
//     checkInDate: "",
//     checkOutDate: "",
//     rating: "",
//     ratingoutof5: "",
//     ratingNumber: "",
//     quality: "",
//     amenities: [{ img: "", name: "" }],
//     roomTypes: [
//       {
//         type: "",
//         price: "",
//         tax: "",
//         availableRooms: "",
//         specialFeatures: [""],
//       },
//     ],
//   });

//   const handleChange = (e, section, index, subField) => {
//     const { name, value } = e.target;
//     if (section === "amenities" || section === "roomTypes") {
//       const updated = [...form[section]];
//       if (subField === "specialFeatures") {
//         updated[index][subField] = value.split(","); // comma-separated
//       } else {
//         updated[index][subField || name] = value;
//       }
//       setForm({ ...form, [section]: updated });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const addAmenity = () =>
//     setForm({ ...form, amenities: [...form.amenities, { img: "", name: "" }] });

//   const addRoomType = () =>
//     setForm({
//       ...form,
//       roomTypes: [
//         ...form.roomTypes,
//         {
//           type: "",
//           price: "",
//           tax: "",
//           availableRooms: "",
//           specialFeatures: [""],
//         },
//       ],
//     });

//     const handleSubmit = async (e) => {
//       e.preventDefault();
    
//       try {
//         await axios.post("http://localhost:5000/api/hotel/hoteladd", form); // Send as JSON
//         alert("Hotel added!");
//         window.location.reload(); // Reload after success
//       } catch (err) {
//         console.error(err);
//         alert("Failed to add hotel.");
//       }
//     };

//   return (
//     <form onSubmit={handleSubmit} className="p-6 max-w-4xl mx-auto space-y-4">
//       <h2 className="text-2xl font-bold">Add Hotel</h2>
//       <input
//         name="title"
//         value={form.title}
//         onChange={handleChange}
//         placeholder="Title"
//         required
//         className="input"
//       />
//       <input
//         name="description"
//         value={form.description}
//         onChange={handleChange}
//         placeholder="Description"
//         className="input"
//       />
//       {/* <input name="imgSrc" value={form.imgSrc} onChange={handleChange} placeholder="Image URL" required className="input" /> */}
//        <input
//         name="destination"
//         value={form.destination}
//         onChange={handleChange}
//         placeholder="Destination"
//         required
//         className="input"
//       /> 
//       {/* <input
//         type="date"
//         name="checkInDate"
//         value={form.checkInDate}
//         onChange={handleChange}
//         required
//         className="input"
//       /> 
//       <input
//         type="date"
//         name="checkOutDate"
//         value={form.checkOutDate}
//         onChange={handleChange}
//         required
//         className="input"
//       /> */}
//       <input
//         name="rating"
//         type="number"
//         step="0.1"
//         value={form.rating}
//         onChange={handleChange}
//         placeholder="Rating"
//         required
//         className="input"
//       />
//       <input
//         name="ratingoutof5"
//         type="number"
//         step="0.1"
//         value={form.ratingoutof5}
//         onChange={handleChange}
//         placeholder="Rating out of 5"
//         className="input"
//       />
//       <input
//         name="ratingNumber"
//         type="number"
//         value={form.ratingNumber}
//         onChange={handleChange}
//         placeholder="Number of Reviews"
//         className="input"
//       />
//       <input
//         name="quality"
//         value={form.quality}
//         onChange={handleChange}
//         placeholder="Quality"
//         className="input"
//       />

//       <div>
//         <h3 className="font-semibold">Amenities</h3>
//         {form.amenities.map((a, i) => (
//           <div key={i} className="flex gap-2 mb-2">
//             <input
//               value={a.img}
//               onChange={(e) => handleChange(e, "amenities", i, "img")}
//               placeholder="Image"
//               className="input"
//             />
//             <input
//               value={a.name}
//               onChange={(e) => handleChange(e, "amenities", i, "name")}
//               placeholder="Name"
//               className="input"
//             />
//           </div>
//         ))}
//         <button type="button" onClick={addAmenity} className="btn">
//           Add Amenity
//         </button>
//       </div>

//       <div>
//         <h3 className="font-semibold">Room Types</h3>
//         {form.roomTypes.map((r, i) => (
//           <div key={i} className="grid grid-cols-2 gap-2 mb-4">
//             <input
//               value={r.type}
//               onChange={(e) => handleChange(e, "roomTypes", i, "type")}
//               placeholder="Type"
//               className="input"
//             />
//             <input
//               value={r.price}
//               onChange={(e) => handleChange(e, "roomTypes", i, "price")}
//               placeholder="Price"
//               type="number"
//               className="input"
//             />
//             <input
//               value={r.tax}
//               onChange={(e) => handleChange(e, "roomTypes", i, "tax")}
//               placeholder="Tax"
//               type="number"
//               className="input"
//             />
//             <input
//               value={r.availableRooms}
//               onChange={(e) =>
//                 handleChange(e, "roomTypes", i, "availableRooms")
//               }
//               placeholder="Available Rooms"
//               type="number"
//               className="input"
//             />
//             <input
//               value={r.specialFeatures}
//               onChange={(e) =>
//                 handleChange(e, "roomTypes", i, "specialFeatures")
//               }
//               placeholder="Special Features (comma-separated)"
//               className="input col-span-2"
//             />
//           </div>
//         ))}
//         <button type="button" onClick={addRoomType} className="btn">
//           Add Room Type
//         </button>
//       </div>

//       <button type="submit" className="btn bg-blue-600 text-white">
//         Submit Hotel
//       </button>
//     </form>
//   );
// }













import { useState } from "react";
import axios from "axios";

export default function Addhotel() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    destination: "",
    checkInDate: "",
    checkOutDate: "",
    rating: "",
    ratingoutof5: "",
    ratingNumber: "",
    quality: "",
    amenities: [{ img: "", name: "" }],
    roomTypes: [
      {
        type: "",
        price: "",
        tax: "",
        availableRooms: "",
        specialFeatures: [""],
      },
    ],
  });

  const handleChange = (e, section, index, subField) => {
    const { name, value } = e.target;
    if (section === "amenities" || section === "roomTypes") {
      const updated = [...form[section]];
      if (subField === "specialFeatures") {
        updated[index][subField] = value.split(",");
      } else {
        updated[index][subField || name] = value;
      }
      setForm({ ...form, [section]: updated });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const addAmenity = () =>
    setForm({ ...form, amenities: [...form.amenities, { img: "", name: "" }] });

  const addRoomType = () =>
    setForm({
      ...form,
      roomTypes: [
        ...form.roomTypes,
        {
          type: "",
          price: "",
          tax: "",
          availableRooms: "",
          specialFeatures: [""],
        },
      ],
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/hotel/hoteladd", form);
      alert("Hotel added!");
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Failed to add hotel.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Add Hotel</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="p-2 border rounded w-full"
        />
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-2 border rounded w-full"
        />
        <input
          name="destination"
          value={form.destination}
          onChange={handleChange}
          placeholder="Destination"
          required
          className="p-2 border rounded w-full"
        />
        <input
          name="rating"
          type="number"
          step="0.1"
          value={form.rating}
          onChange={handleChange}
          placeholder="Rating"
          required
          className="p-2 border rounded w-full"
        />
        <input
          name="ratingoutof5"
          type="number"
          step="0.1"
          value={form.ratingoutof5}
          onChange={handleChange}
          placeholder="Rating out of 5"
          className="p-2 border rounded w-full"
        />
        <input
          name="ratingNumber"
          type="number"
          value={form.ratingNumber}
          onChange={handleChange}
          placeholder="Number of Reviews"
          className="p-2 border rounded w-full"
        />
        <input
          name="quality"
          value={form.quality}
          onChange={handleChange}
          placeholder="Quality"
          className="p-2 border rounded w-full"
        />
      </div>

      {/* Amenities */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Amenities</h3>
        {form.amenities.map((a, i) => (
          <div key={i} className="flex flex-col sm:flex-row gap-2 mb-2">
            <input
              value={a.img}
              onChange={(e) => handleChange(e, "amenities", i, "img")}
              placeholder="Image URL"
              className="p-2 border rounded w-full"
            />
            <input
              value={a.name}
              onChange={(e) => handleChange(e, "amenities", i, "name")}
              placeholder="Name"
              className="p-2 border rounded w-full"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addAmenity}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Amenity
        </button>
      </div>

      {/* Room Types */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Room Types</h3>
        {form.roomTypes.map((r, i) => (
          <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
              value={r.type}
              onChange={(e) => handleChange(e, "roomTypes", i, "type")}
              placeholder="Type"
              className="p-2 border rounded w-full"
            />
            <input
              value={r.price}
              onChange={(e) => handleChange(e, "roomTypes", i, "price")}
              placeholder="Price"
              type="number"
              className="p-2 border rounded w-full"
            />
            <input
              value={r.tax}
              onChange={(e) => handleChange(e, "roomTypes", i, "tax")}
              placeholder="Tax"
              type="number"
              className="p-2 border rounded w-full"
            />
            <input
              value={r.availableRooms}
              onChange={(e) =>
                handleChange(e, "roomTypes", i, "availableRooms")
              }
              placeholder="Available Rooms"
              type="number"
              className="p-2 border rounded w-full"
            />
            <input
              value={r.specialFeatures}
              onChange={(e) =>
                handleChange(e, "roomTypes", i, "specialFeatures")
              }
              placeholder="Special Features (comma-separated)"
              className="p-2 border rounded w-full col-span-2"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addRoomType}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Room Type
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded text-lg font-semibold"
      >
        Submit Hotel
      </button>
    </form>
  );
}
