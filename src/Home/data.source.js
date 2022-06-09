import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: '/img/logo2.png',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <p>Home</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item1',
        className: 'header3-item',
        children: {
          href: 'https://staking.communitychain.xyz/',
          children: [
            {
              children: (
                <span>
                  <p>Staking</p>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item2',
        className: 'header3-item',
        children: {
          href: 'https://explorer.communitychain.xyz/',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>Scan</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item3',
        className: 'header3-item',
        children: {
          href: 'https://faucet.communitychain.xyz/',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        <span>Faucet</span>
                      </p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
      {
        name: 'item~l43zsthv4k8',
        className: 'header3-item',
        children: {
          href: 'https://docs.communitychain.xyz/',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>Docs</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children: 'Build zkRollup for BAS',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: (
          <span>
            <p>Nabalus Community Chain</p>
          </span>
        ),
      },
    ],
  },
};
export const Content110DataSource = {
  OverPack: {
    className: 'home-page-wrapper content11-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>What is CommChain ?</p>
            </span>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        children: (
          <span>
            <span>
              <p>
                CommChain is Built by Nabalus(list Binance:NAS) Community
              </p>
            </span>
          </span>
        ),
        className: 'title-content',
      },
      {
        name: 'content2',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>Base on BAS(BNBChain Application Sidechain)</p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
        className: 'title-content',
      },
      {
        name: 'content~l440qo709st',
        className: '',
        children: (
          <span>
            <span>
              <span>
                <p>Developing zkRollup, TPS up to 10K</p>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  button: {
    className: 'l440cfge51-editor_css',
    children: { a: { className: 'button', href: '#', children: '立即报名' } },
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <p>Why zkRollup-BAS ?</p>
                </span>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>100% EVM Compatible</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <p>Not almost 100%, just 100%</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>Data Security</p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>All blocks are verified and stored in BSC smart contract</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: (
                <span>
                  <span>
                    <p>Fast and low gas</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>Actually, it's Ultra Fast and Ultra low gas</p>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <p>Blockchain Service Suite</p>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>base on BAS</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Explorer</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    Blockchain explorer and analytics platform for BAS. It will
                    enable users to search the blocks, transactions, addresses,
                    and tokens on your BAS network.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Faucet</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    Faucet is a portal for developers to obtain test tokens on
                    the Testnet to experiment with BAS features without spending
                    crypto on the mainnet.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Staking</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    Management platform for the validator and delegator. Users
                    can earn high returns by delegating tokens to validators on
                    your BAS network.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Bridge</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      Partner with cBridge to support cross-chain liquidity on
                      BEP20 and BEP721/1155 between BSC and BAS.
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>zkRollup</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>
                    Put BAS blocks into BSC, with Zreo knowledge, it runs fewer
                    nodes, but more safety, and faster.
                  </p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Nodes</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <p>From Nebulas Nodes, to be BAS nodes.</p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <p>Roadmap</p>
          </span>
        ),
        className: 'title-h1',
      },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              '/img/building-0.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <p>2022Q2</p>
                </span>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <p>BAS Testnet</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: { 
			  className: 'block-content', 
			  children: 
			    'Research the source code of BAS, include Staking / BlockScan / Faucet, launch Testnet, contribute Docs about how it works.' ,
		  },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              '/img/building-1.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <span>
                  <p>2022Q3</p>
                </span>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>zkRollup Development</p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content',
            children:
              'Develop ZK-Circuit for Rollup, block data sync from BAS Testnet to BSC Testnet, if BAS crash, it can rescue from BSC.',
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              '/img/building-2.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <p>2022Q4</p>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <p>CommChain Testnet</p>
              </span>
            ),
          },
          content: {
            className: 'block-content',
            children:
              'It\'ll run fewer nodes, but more safety, and faster.',
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children:
              '/img/building-3.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: {
            className: 'block-name',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          post: {
            className: 'block-post',
            children: (
              <span>
                <p>
                  <br />
                </p>
              </span>
            ),
          },
          time: {
            className: 'block-time',
            children: (
              <span>
                <p>2023</p>
              </span>
            ),
          },
          title: {
            className: 'block-title',
            children: (
              <span>
                <p>CommChain Mainnet</p>
              </span>
            ),
          },
          content: {
            className: 'block-content',
            children:
              'Cool ! BNBChain zkRollup L2, build by Nebalus Community.',
          },
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: 'COMMCHAIN',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: 'zkRollup of BNB Sidechain',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Product' },
        childWrapper: {
          children: [
            { name: 'link0', href: 'https://staking.communitychain.xyz/', children: 'Staking' },
            { name: 'link1', href: 'https://explorer.communitychain.xyz/', children: 'BlockScan' },
            { name: 'link2', href: 'https://faucet.communitychain.xyz/', children: 'Faucet' },
            { name: 'link3', href: 'https://docs.communitychain.xyz/', children: 'Docs' },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'About' },
        childWrapper: {
          children: [
            { href: 'https://docs.communitychain.xyz/', name: 'link0', children: 'FAQ' },
            { href: 'https://t.me/George8080', name: 'link1', children: 'Telegram' },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: 'Assets' },
        childWrapper: {
          children: [
            { href: 'https://github.com/busyapedao', name: 'link0', children: 'Github' },
            { href: '#', name: 'link1', children: 'Mirror' },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2022 by <a href="https://go.nebulas.io/proposal/650">Nebulas Community</a> All Rights
        Reserved
      </span>
    ),
  },
};
