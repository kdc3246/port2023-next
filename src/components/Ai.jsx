'use client';

import { useState } from 'react';
import { ethers } from 'ethers';
import tokenABI from './tokenABI';
import styles from '../app/Ai.module.css';

const Ai = () => {
  const [transactionHash, setTransactionHash] = useState('');
  const [link, setLink] = useState('');
  const [showButton, setShowButton] = useState(true);

  const handleTransferTokens = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const tokenAddress = '0xC42aDAb66c2731D188e16758f1F4007b858148ae';
        const tokenContract = new ethers.Contract(
          tokenAddress,
          tokenABI,
          signer
        );

        const recipientAddress = '0x93E8fDb865c3baa751909dD4ad5cbE5286830f8e';
        const amount = ethers.utils.parseEther('1');
        const transferTx = await tokenContract.transfer(
          recipientAddress,
          amount
        );

        setTransactionHash(transferTx.hash);

        await transferTx.wait();

        const desiredLink =
          'https://console.dialogflow.com/api-client/demo/embedded/89f258e5-b9da-45ef-978a-dead3d61749c';

        setLink(desiredLink);
        setShowButton(false);
      } else {
        throw new Error('Metamask 계정이 연결되지 않았습니다.');
      }
    } catch (error) {
      console.error('오류:', error);
    }
  };

  return (
    <div className={styles.container1}>
      <h1 className={styles.title}>AI 챗봇 "보안이"</h1>
      <p className={styles.info}>
        정보보호학과 토큰(IST)을 지불하고 궁금한 것들을 물어보세요!
      </p>

      {showButton ? (
        <div className={styles.before}>
          <a href={'https://erc20-token-drop-ragyu.vercel.app/'}>
            <img
              src="img/token.jpg"
              alt="토큰 발급 링크"
              style={{ width: '200px' }}
            />
          </a>

          <button onClick={handleTransferTokens} className={styles.send_button}>
            Send Token
          </button>
        </div>
      ) : (
        <div className={styles.before}>
          <a href={link}>
            <img
              src="img/chatbot.png"
              alt="보안이 링크"
              style={{ width: '500px' }}
            />
          </a>
          <p>
            토큰 전송 트랜잭션 해시: <br />
            {transactionHash}
          </p>
        </div>
      )}
    </div>
  );
};

export default Ai;
