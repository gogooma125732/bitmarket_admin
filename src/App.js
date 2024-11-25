import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // 로그인 상태 (실제로는 인증 체크 필요)

  // 임의의 데이터 (실제 API 호출 없이 임의 데이터로 대체)
  const adminData = {
    revenue: 32424232542532219,  // 총 수익
    userCount: 43241342329673822,  // 사용자 수
    recentTrades: [
      { txhash: "ebab264bcce2fddae332c4007c0c7dccd06e...", sahash: "16gqpZMJxXjkErRo3t1czba...", rahash: "1G23Uzwj55k2A9TRwaTknqGav...", amount: 100, date: "2024-11-25" },
      { txhash: "42734f17672547cc31f0dbe193018718f958...", sahash: "1CSQrc4k34wPQtS9yFCJG69...", rahash: "16gqpZMJxXjkErRo3t1czbaN3...", amount: 200, date: "2024-11-25" },
      { txhash: "a99785c08fd55deba696dafe458f0763527a...", sahash: "17eknwKbheM5F9Ji5QfjvaD...", rahash: "19S8hcbFRqyRSMFnzodhjHcTr...", amount: 150, date: "2024-11-25" },
      { txhash: "4fbb303efbee1ccc173879f95ab243cd3282...", sahash: "1BYkS7eEpaEatDfFTMkUgi8...", rahash: "1PRXQEoL8vzEzoJJ9hbtAP6Na...", amount: 120, date: "2024-11-25" },
      { txhash: "be869b6fb8d514524c83915e2561d3afd1e5...", sahash: "13qQPQW5rpDe7Y2SEZK1Ldp...", rahash: "1D67pweuWFm8PrH9irbXhEsK8...", amount: 90, date: "2024-11-25" },
    ],  // 최근 거래 내역
  };

  // 대시보드 페이지
  return (
    <div style={{ padding: "20px" }}>
      <h1>BitMarket Administrator Dashboard</h1>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3>total revenue</h3>
          <p>{adminData.revenue} won</p>
        </div>

        <div>
          <h3>total users count</h3>
          <p>{adminData.userCount}</p>
        </div>
      </div>

      <h3>latest transaction</h3>
      <table>
        <thead>
          <tr>
            <th>tx hash</th>
            <th>sending address</th>
            <th>receiving address</th>
            <th>amount</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {adminData.recentTrades.map((trade) => (
            <tr key={trade.txhash}>
              <td>{trade.txhash}</td>
              <td>{trade.sahash}</td>
              <td>{trade.rahash}</td>
              <td>{trade.amount} BTC</td>
              <td>{trade.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
<br></br><br></br><br></br>
    <div>
      <h2>Autehntication Admin</h2>
        <form>
          <input type="text" placeholder="token id" />
          <input type="password" placeholder="passkey" />
          <button type="submit">login</button>
        </form>
    </div>
    <button 
  onClick={() => setIsAuthenticated(false)} 
  style={{
    position: "fixed", 
    top: "20px", 
    right: "20px", 
    padding: "10px 20px", 
    backgroundColor: "#f9c800", 
    color: "#1e1e1e", 
    border: "none", 
    borderRadius: "5px", 
    cursor: "pointer"
  }}
>
  Market page
</button>

    </div>
  );
};

export default AdminPage;
