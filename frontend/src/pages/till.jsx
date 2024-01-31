import React, { useState, useEffect } from "react";
import { DataStore, Predicates } from "aws-amplify";
import { format, parse, set } from "date-fns";
import { Messages, KitchenMenu,  } from "../backend/models";
import TillPayments from "./TillPayments";
import { useNavigate } from "react-router-dom";
import Kitchen from "./kitchen";
import Home from "../map";
import { checkStockLevel } from "./tillstock";
import { motion } from 'framer-motion';
import { ChatBubbleBottomCenterIcon, InboxIcon, XCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import {Link} from 'react-router-dom';
import { PhoneIcon } from "@heroicons/react/20/solid";




const isElectron = window && window.process && window.process.type;
const ipcRenderer = isElectron ? window.require('electron').ipcRenderer : null;





export default function Till() {

  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [table, setTable] = useState(1);
  const [party, setPartyBookings] = useState([]);

  const [selectedParty, setSelectedParty] = useState(null);

  const [scanner, setScanner] = useState(false);
  const [arrival, setArrival] = useState(false);
  const [tablee, setTablee] = useState(false);
  const [session, setSession] = useState(false);
  const [childName, setChildName] = useState("");

const [kitchenMenu, setKitchenMenu] = useState([]);
const [partyNow, setPartyNow] = useState(false);
const [confirm, setConfirm] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
const [kitchen, setKitchen] = useState(false);
const [home, setHome] = useState(false);
const [selectedCategory, setSelectedCategory] = useState(null);
const [staff, setStaff] = useState(null);
const [showCategories, setShowCategories] = useState(true);
const [showItems, setShowItems] = useState(true);
const [showTopBar, setShowTopBar] = useState(false);
const [chat, setChat] = useState(false);
const [drawer, SetDrawer] = useState(false);
const [show, setShow] = useState(false);
const [messages, setMessages] = useState([]);







const navigate = useNavigate();

console.log(order)




useEffect(() => {
  const subscription = DataStore.observe(Messages).subscribe(msg => {
    console.log(msg.model, msg.opType, msg.element);
    setMessages(prevMessages => [...prevMessages, msg.element]);
    console.log(messages)
    setShow(true);
    if (ipcRenderer) {
      ipcRenderer.send('play-sound');
    }
    setTimeout(() => setShow(false), 30000); // hide after 30 seconds
  });

  return () => subscription.unsubscribe();
}, []);



  async function fetchKitchenMeal() {
    const kitchensMenu = await DataStore.query(KitchenMenu);
    setKitchenMenu(kitchensMenu);

    
  }
  
  useEffect(() => {
    fetchKitchenMeal();
  }, []);


  const categories = [...new Set(kitchenMenu.map((item) => item.Category))];
  const [selectedItem, setSelectedItem] = useState(null);
  
  const handleItemClick = async (item) => {
    setSelectedItem(item);
    setShowItems(false);
  setShowCategories(true)
setShowTopBar(true)
    // Pass the selected item to the handleProductClick function
    await handleProductClick(item);
  };


  const filteredData = kitchenMenu.filter(
    (item) => item.Category === selectedCategory
  );

    const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowCategories(false);
  setShowItems(true);
  setShowTopBar(true)
  };
  
  //get all party bookings for today
  

  



  const handleProductClick = async (item) => {
    // Check if the item is a non-stock product (Ingredients === null)
    if (item.Ingredients === null) {
      // For non-stock products, add them to the order directly
      setOrder((order) => [...order, item]);
      setTotal((total) => total + item.Price);
    } else {
      // For regular products, perform stock checking logic
      const inStock = await checkStockLevel(item.id);
      if (!inStock) {
        alert("This item is not in stock");
        return;
      }
      // Add the product item to the order
      setOrder((order) => [...order, item]);
      // Update the total price
      setTotal((total) => total + item.Price);
    }
  };
  

  const handleDeleteClick = async (index) => {
    // Remove the item from the order
    const newOrder = [...order];
    newOrder.splice(index, 1);
    setOrder(newOrder);

    // Update the total price
    const newTotal = total - order[index].Price;
    setTotal(newTotal);
  };

  const handleConfirm = async (order, total) => {
    setOrder(order);
    setTotal(total);
    setConfirm(true);
  };


 
  

  
  





  if (tablee === true) {
    navigate ('/Tables');
  }



 

  

  if (chat === true) {
    return <SlideOver />
  }

  if (kitchen === true) {
    navigate ('/kitchen')
  }
  if (confirm === true) {

    
    return (
      <TillPayments order={order} total={total} table={table} childName= {childName} setOrder={setOrder} setTotal={setTotal} staff={staff} />
    );
  }
  
  

  if (home === true) {
    navigate('/dash');
  }
    
  

  
    // Search the local datastore for all sessions
    
  


  const colors = [
    
    'bg-blue-500',
    'bg-indigo-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-cyan-500',
    'bg-purple-700',
    'bg-gray-500',
  ];
  
  const handleSelectedChange = (selectedStaff) => {
    console.log('Selected staff member:', selectedStaff);
    setStaff(selectedStaff.StaffId)

    // You can add your own logic here to handle the change in the selected staff member
  };


  


  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      

      {!showTopBar && (
    <div className="mt-2 border-b border-gray-200 pb-2 flex flex-col sm:flex-row items-center">
 









    </div>
  )}

  





     
  <div className="flex flex-col lg:flex-row justify-between">
  <div className="w-full lg:w-2/3">
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="mt-4 border-b-2 border-gray-200 pb-4">
        <h2 className="font-bold text-lg mb-4">Menu:</h2>
        {showCategories && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`${
                colors[index % colors.length]
              } text-white font-bold py-2 px-4 rounded-full shadow-md`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
      )}
      {showItems && (

        <div className="mt-10 mr-5 ml-5">
          {filteredData.map((item,index) => {
            let stockColor;
            if (item.StockLevel < 5) {
              stockColor = 'bg-red-500';
            } else if (item.StockLevel >= 5 && item.StockLevel <= 10) {
              stockColor = 'bg-yellow-500';
            } else {
              stockColor = colors[index % colors.length];
            }

            return (
              <motion.button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`text-white font-bold py-2 px-4 rounded-full shadow-md mt-2 mr-2 ${stockColor}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item.Name} - £{item.Price.toFixed(2)} - Stock: {item.StockLevel}
              </motion.button>
            );
          })}
        </div>
      )}

    {selectedItem && selectedItem.Extras && (
  <motion.div
    className="mt-10 mr-3 ml-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="font-bold">Extras:</h3>
    <ul>
      {selectedItem.Extras.map((extra, index) => {
        const kitchenItem = kitchenMenu.find(item => item.Name === extra.name);

        // Check if the kitchenItem exists and has a valid price
        if (kitchenItem && extra.price !== undefined) {
          // Create a modified copy of kitchenItem with the desired price
          const modifiedKitchenItem = {
            ...kitchenItem,
            Price: extra.price, // Replace with the desired price
          };

          return (
            <motion.button
              onClick={() => handleProductClick(modifiedKitchenItem)}
              key={index}
              className={`text-blue-500 font-bold py-2 px-4 rounded-full shadow-md mt-2 mr-2`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {extra.name} - £{extra.price.toFixed(2)} - Stock: {kitchenItem.StockLevel ? kitchenItem.StockLevel : 'N/A'}
            </motion.button>
          );
        } else {
          // Handle the case where kitchenItem or extra.price is undefined
          return null; // You can choose to display nothing or handle it differently
        }
      })}
    </ul>
  </motion.div>
)}



            </div>
            </div>
            </div>






        <div className="w-1/3 border-purple-400">
        <div className="border  p-4 mt-2 bg-purple-200 p-4 rounded-lg shadow-md">

        <p className="font-bold">Collection</p>
             
              </div>
          <div className="mt-4 border-b-4 border-gray-200 pb-4">
            <h2 className="font-bold text-lg mb-4">Order:</h2>
            <div className="border bg-blue-200 p-4 rounded-lg shadow-md">
              <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
             
               onClick={() => {
              window.location.reload();
              }}
             className="bg-red-500 text-white p-1 rounded">Cancel</motion.button>

              <ul>
             
                {order.map((item, index) => (
                  <li key={index} className="flex mt-3 justify-between items-center font-bold mb-5">
                    <div>
                      {item.Name} £{item.Price.toFixed(2)}
                    </div>
                    <motion.button
      className="bg-red-500 text-white p-1 rounded"
      onClick={() => handleDeleteClick(index)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <XCircleIcon className="w-5 h-5" />
    </motion.button>

                  </li>
                ))}
              </ul>
              <p className="mt-3 mb-3 font-bold">Total: £{total.toFixed(2)}</p>
              <motion.button                 onClick={() => handleConfirm(order, total)}

        className="w-16 h-10 mt-3 mb-3 bg-purple-600 text-xs font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-1 mb-1 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Confirm
      </motion.button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
      );
}
