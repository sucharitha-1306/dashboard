import React from "react";
import { AiOutlineSearch} from "react-icons/ai";
import{BiDollar} from "react-icons/bi"
import {FiArrowDownLeft,FiFileText} from "react-icons/fi"
import { MdWavingHand, } from "react-icons/md";
import {PiHandbagBold} from "react-icons/pi"
import { BsArrowUpShort,BsArrowDownShort,BsWalletFill} from "react-icons/bs";
import BarChart from "../components/BarChart";
import DoughnutChart from "../components/DoughnutChart";
import abstract from '../assets/abstract.jpg'
import abstract2 from '../assets/abstract2.jpg'
const Dashboard = () => {
  return (
    <div className="bg-slate-50 p-5 w-full ml-48">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex items-center">
          Hello Sharukh{" "}
          <span className="ml-2">
            <MdWavingHand  size={20} color="Burlywood"/>
          </span>
          ,
        </div>
        <div className="flex items-center p-1 bg-white rounded-md">
          <AiOutlineSearch size={20} color="black" />
          <input className="ml-2" placeholder="Search" />
        </div>
      </div>

      {/* 4 Cards */}

      <div className="grid grid-cols-4 gap-2">
        <div className="flex items-center p-1 bg-white rounded-md">
          <BiDollar style={{color:"green",backgroundColor:"rgba(0,255,0,0.25)",borderRadius:60,fontSize:108,padding:34}}/> 
          <FiArrowDownLeft/>
          <div >
            <div className="text-sm">Earnings</div>
            <div className="text-xl font-bold">$198k</div>
            <div className="text-sm">
              <span className="text-green-600 font-semibold "><BsArrowUpShort/>37.8%</span> this month
              </div>
              </div>
            </div>

        <div className="flex items-center mt-5 gap-3 pl-3 p-2 bg-white">
          <FiFileText style={{color:"indigo",backgroundColor:"rgba(186,85,211,0.25)",borderRadius:50,fontSize:88,padding:24}} />
          <div>
            <div className="text-sm">Orders</div>
            <div className="text-xl font-bold">$15k</div>
            <div className="text-sm">
              <span className="text-purple-600 font-semibold">
              <BsArrowDownShort/>+5%</span> this
              month
            </div>
          </div>
        </div>

        <div className="flex items-center mt-5 gap-3 pl-3 p-2 bg-white">
          <BsWalletFill style={{color:"blue",backgroundColor:"rgb(135,206,235,0.25)",borderRadius:60,fontSize:108,padding:34}} />
          <div>
            <div className="text-sm">Balance</div>
            <div className="text-xl font-bold">$2.4k</div>
            <div className="text-sm">
              <span className="text-pink-600 font-semibold">
              <BsArrowDownShort/>2%</span> this month
            </div>
          </div>
        </div>

        <div className="flex items-center mt-5 gap-3 pl-3 p-2 bg-white">
          <PiHandbagBold style={{color:"red",backgroundColor:"rgba(253,108,158,0.25)",borderRadius:60,fontSize:108,padding:34}} />
          <div>
            <div className="text-sm">Total Sales</div>
            <div className="text-xl font-bold">$64k</div>
            <div className="text-sm">
              <span className="text-rose-600 font-semibold">
              <BsArrowUpShort/>+11%</span> this
              month
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}

      <div className="mt-5 flex gap-4">
        <div className="bg-white w-2/3 rounded-md p-2">
          <div className="flex justify-between mb-2">
            <div>
              <div className="font-semibold">Overview</div>
              <div className="text-sm">Monthly Earning</div>
            </div>
            <select>
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Yearly</option>
            </select>
          </div>
          <div className="h-64"><BarChart /></div>
        </div>

        <div className="bg-white w-1/3 rounded-md p-2">
          <div className="flex justify-between mb-2">
            <div>
              <div className="font-semibold">Customers</div>
              <div className="text-sm">Customers that buy products</div>
            </div>
          </div>
          <div className="h-64"><DoughnutChart /></div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white mt-5 rounded-md">
        <div className="flex justify-between mb-2">
          <div>
            <div className="font-bold">Product Sell</div>
          </div>
          <div className="flex items-center p-1 bg-white rounded-md">
            <AiOutlineSearch size={20} color="gray" />
            <input className="ml-2" placeholder="Search" />
          </div>
          <select>
            <option>Today</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>

        <div className="row">
          <div className="col-md-5">
        <table className="table" >
        <thead>
    <tr>
      <th className="w-96 justify-start items-center background:grey">Product Name</th>
      <th className="w-36 justify-start items-center">Stock</th>
      <th className="w-36 justify-start items-center">Price</th>
      <th className="w-36 justify-start items-center">Total Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="w-96 justify-start items-center">
        <div className=" border-bottom: 1px solid #ddd;">
          <div className="flex items-center pl-2">
            <img src={abstract} className="h-8" />
            <div className="ml-2">
              <p className="font-semibold">Abstract 3D</p>
              <p className="text-sm">Lorem ipsum Dolar sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </td>
      <td className="w-36 justify-start items-center">32 in stock</td>
      <td className="w-36 justify-start items-center">$45.99</td>
      <td className="w-36 justify-start items-center">20 sales</td>
    </tr>
   </tbody>
  <tbody>
    <tr>
      <td className="w-96 justify-start items-center">
        <div>
          <div className="flex items-center pl-2">
            <img src={abstract2} className="h-12" />
            <div className="ml-2">
              <p className="font-semibold">Sarphens illustration</p>
              <p className="text-sm">Lorem ipsum dolar sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      </td>
      <td className="w-36 justify-start items-center">32 in stock</td>
      <td className="w-36 justify-start items-center">$19.99</td>
      <td className="w-36 justify-start items-center">20 sales</td>
    </tr>
    </tbody>

</table>

        </div>
      </div>
    </div>
    </div>
    
  );
    
};

export default Dashboard;
