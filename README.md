<div align="center">
  <!-- <img src="figs/InfiniteBench.jpg" width="500px"/>
  <br />
  <br /> -->
  
# Beyond the Turn-Based Game: Duplex Models Enable Real-Time Conversations

<p align="center">
  <a href="./README_ZH.md">中文版</a> •
  <a href="https://arxiv.org/abs/2402.13718">Paper</a> •
  <a href="https://huggingface.co/datasets/xinrongzhang2022/Duplex-UltraChat">Data</a> •
  <a href="https://huggingface.co/xinrongzhang2022/MiniCPM-duplex">Model</a>
</p>

</div>
## Introduction
We introduce the concept of DUPLEX MODEL that can receive inputs from users \textit{while} generating outputs and adjust dynamically to instant user feedback such as interruptions. Rather than turn-based, the duplex model could interact with users in real time. To demonstrate the performance of DUPLEX MODEL, we train an example model, minicpm-duplex, based on the MiniCPM-2.4B. The training data of DUPLEX MODEL is different from common training corpus, which are segmented into slices to learn real input/output in real-time scenarios.
## Try MiniCPM-duplex
Here is an instruction for building MiniCPM-duplex demo on your Mac book or linux server.
### install dependencies

- download **latest** node.js from https://nodejs.org/en/download/
- extract the downloaded file and add the bin folder to PATH
- or you can use any way you like to install node.js
- install yarn by running `corepack enable`
- install python dependencies by running `pip install -r requirements.txt`


### load the model

- Download the model weights from 🤗 Huggingface directly: <https://huggingface.co/xinrongzhang2022/MiniCPM-duplex>
- Put the model .bin file under `./minicpm-duplex`
- Run the following command to start the backend server
    ```
    python model_server_duplex.py
    ```
- Now the backend server is listening `ws://localhost:8765`


### run the demo server

- make sure the backend server is running
- The demo will try to connect to the backend model server on `ws://localhost:8765` by default.
- You can change it by defining the `DUPLEX_SERVER` environment variable.
- You can customize voice listening duration by defining the `DUPLEX_DURATION` environment variable.
- Run the following command to start the demo server
  ```
    # make sure you have installed latest nodejs and yarn
    yarn install
    yarn dev
   ```
- Now the html server is running on http://localhost:3000 (if port 3000 is not in use)

### note
If you are running the server on a different machine, you need to make sure your browser can access the server's 3000 and 8765 port.

## Citation
```bibtex
coming soon
```

## Acknowledgement

Thanks to Xueheng Luo, Binhui Fan, Kaihuo Zhang, Ao Sun, Zhongwu Zhai, Yating Gong, Chaoqun He, Zhenning Dai, Yunqi Ba, Rongting Tang, Lei Zhang, Yingying Xiong, Tianmeng Pang, Chenzhe Jing, Ge Zhou, Siyuan Li, Yuge Tu, Yulin Chen, Ganqu Cui, Fengyuan Lu, Yudong Mei, Hanghao Wu, Suiyun Yang, Ran Yao, Ziming You, Jie Zhou, Jie Cai, Haifeng Xu, Yibin Li, Tianchi Cai, Xiang Long, Shi Yu, Renjie Lou, Yinxu Pan, JiaWen Liu, Hanqing Zhao, Peiqi Yu, Yishan Li, Bokai Xu, Yifan Luo, Siyuan Cai, Fuxi Zhu, Ran Yao, Tianyi Chen, Meixu Hu, Shi Yu, Ling Li, Zhenhua Zhang, Meiqi Fan, Yuqi Luo, Tianmeng Pang, Siyuan Liu, Bowen Ping.

## References

[^1]: https://huggingface.co/openbmb/MiniCPM-2B-sft-bf16
[^2]: https://github.com/thunlp/UltraChat?tab=readme-ov-file