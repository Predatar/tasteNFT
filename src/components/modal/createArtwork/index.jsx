import React, { useState, useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';

import Cleave from 'cleave.js/react';

import Btn from '../../button/btn/Btn';

import styles from './index.module.scss';

import img from '../../../img/img.png';

const CreateArtWork = ({ state, onClick }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [state]);

  const returnStep = useCallback(() => {
    const steps = [];

    for (let i = 0; i < 3; i++) {
      if (i < step) {
        steps.push(<div className={styles.stepActive} key={i}></div>);
      } else {
        steps.push(<div className={styles.step} key={i}></div>);
      }
    }

    return <div className={styles.stepWrapper}>{steps}</div>;
  }, [step]);

  const nextStep = () => {
    if (step == 3) {
      onClick();
      setStep(1);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className={styles.backdoor + ' ' + (state ? styles.backdoorActive : '')}>
      <div className={styles.modal}>
        <div className={styles.close} onClick={onClick}>
          <span className="icon-close"></span>
        </div>
        <div className={styles.title}>Creating artwork</div>
        {returnStep()}
        <div className={styles.stepCount}>Step {step} from 3</div>
        {step == 1 ? <Dropzone /> : step == 2 ? <Edit /> : <Info />}

        <div className={styles.btn}>
          {step == 3 ? (
            <Btn text={'Finish creating'} onClick={nextStep} />
          ) : (
            <Btn text={'Next step'} onClick={nextStep} />
          )}
        </div>
      </div>
    </div>
  );

  function Dropzone() {
    const [img, setImg] = useState([]);

    const onDrop = useCallback(acceptedFiles => {
      acceptedFiles.map(async file => {
        const reader = new FileReader();
        reader.onload = await function (e) {
          setImg(prevState => {
            [...prevState, { src: e.target.result }];
          });
        };
        reader.readAsDataURL(file);
        return file;
      });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: { 'image/*': [] },
      multiple: false,
      onDrop
    });

    return (
      <>
        <div className={styles.info}>Upload the artwork you will be selling</div>

        <section>
          <div {...getRootProps()} className={styles.dropzone}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Release to drop the files here</p>
            ) : (
              <>
                <div className={styles.dropInfo}>1500x500px. JPG, PNG or GIF. 100MB max size.</div>
                <p>Drag and drop an image here, or click to browse</p>
              </>
            )}
          </div>
        </section>
      </>
    );
  }

  function Edit() {
    return (
      <>
        <div className={styles.info}>Censor the public version of artwork, if it contains 18+ content</div>
        <div className={styles.img}>
          <img src={img} alt="img" />
        </div>
        <div className={styles.tools}>
          <div className={styles.tool}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.2001 4C2.3161 4 1.6001 4.716 1.6001 5.6V18.4C1.6001 19.284 2.3161 20 3.2001 20H20.8001C21.6841 20 22.4001 19.284 22.4001 18.4V5.6C22.4001 4.716 21.6841 4 20.8001 4H3.2001ZM18.4001 6.4C19.2841 6.4 20.0001 7.116 20.0001 8C20.0001 8.884 19.2841 9.6 18.4001 9.6C17.5161 9.6 16.8001 8.884 16.8001 8C16.8001 7.116 17.5161 6.4 18.4001 6.4ZM4.0001 8L7.97822 11.9781L8.8001 12.8L9.7251 13.725C10.0627 14.0626 10.6078 14.0595 10.9454 13.7219C11.2838 13.3843 11.2838 12.8353 10.9454 12.4969L10.0235 11.5766L11.2001 10.4L13.5782 12.7781L15.3251 14.525C15.6627 14.8626 16.2078 14.8595 16.5454 14.5219C16.8838 14.1843 16.8838 13.6353 16.5454 13.2969L16.4235 13.1766L17.6001 12L20.0001 14.4V17.6H4.0001V8Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={styles.tool}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M11.9999 2.3999C6.70753 2.3999 2.3999 6.70753 2.3999 11.9999C2.3999 17.2923 6.70753 21.5999 11.9999 21.5999C17.2923 21.5999 21.5999 17.2923 21.5999 11.9999C21.5999 11.7877 21.5156 11.5843 21.3655 11.4343L21.2468 11.3171C21.229 11.2974 21.2102 11.2786 21.1905 11.2608L12.7952 2.86396C12.7463 2.79691 12.6873 2.73787 12.6202 2.68896L12.5655 2.63428C12.4155 2.48425 12.2121 2.39994 11.9999 2.3999ZM11.2358 4.09678C11.2155 4.3289 11.1999 4.56305 11.1999 4.7999C11.1999 5.08633 11.2157 5.36957 11.2452 5.64834C8.06701 6.02236 5.5999 8.72124 5.5999 11.9999C5.5999 15.5343 8.4655 18.3999 11.9999 18.3999C15.2786 18.3999 17.9774 15.9328 18.3515 12.7546C18.6302 12.7841 18.9135 12.7999 19.1999 12.7999C19.4368 12.7999 19.6709 12.7843 19.903 12.764C19.5146 16.8232 16.1631 19.9999 11.9999 19.9999C7.57228 19.9999 3.9999 16.4275 3.9999 11.9999C3.9999 7.8367 7.17661 4.48525 11.2358 4.09678ZM12.8171 5.14834L18.8515 11.1827C15.5871 11.008 12.9918 8.41271 12.8171 5.14834Z"
                fill="white"
              />
            </svg>
          </div>
          <div className={styles.tool}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M11.9998 0.799805C11.8744 0.79998 11.7508 0.829627 11.639 0.886352C11.5272 0.943078 11.4303 1.02529 11.3561 1.12637C11.348 1.13659 11.3402 1.14701 11.3326 1.15762C9.44372 3.58826 4.7998 11.2186 4.7998 15.1998C4.7998 19.1766 8.023 22.3998 11.9998 22.3998C15.9766 22.3998 19.1998 19.1766 19.1998 15.1998C19.1998 11.2231 14.5662 3.60815 12.6732 1.16855C12.673 1.16828 12.6735 1.16727 12.6732 1.16699C12.6638 1.15314 12.6539 1.13959 12.6436 1.12637C12.5694 1.02529 12.4724 0.943078 12.3606 0.886352C12.2488 0.829627 12.1252 0.79998 11.9998 0.799805ZM7.1998 14.3998C7.6422 14.3998 7.9998 14.7574 7.9998 15.1998C7.9998 16.8878 9.07179 18.4022 10.667 18.967C11.083 19.1142 11.3009 19.5705 11.1529 19.9873C11.0369 20.3153 10.7294 20.5201 10.3998 20.5201C10.3118 20.5201 10.2206 20.506 10.1326 20.4748C7.89982 19.6852 6.3998 17.5646 6.3998 15.1998C6.3998 14.7574 6.7574 14.3998 7.1998 14.3998Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </>
    );
  }

  function Info() {
    const [copies, setCopies] = useState(1);
    const [cost, setCost] = useState(0);
    const [tab, setTab] = useState(true);

    const minus = () => {
      if (copies > 1) {
        setCopies(copies - 1);
      }
    };
    const plus = () => {
      setCopies(copies + 1);
    };

    const handleInput = ({ target }) => {
      setCost(target.value * 0.000130854);
    };

    return (
      <>
        <label htmlFor="name" className={styles.artworkName}>
          Artwork name
          <input type="text" id="name" />
        </label>
        <label htmlFor="descr" className={styles.artworkDescr}>
          Description
          <textarea name="descr" id="descr"></textarea>
        </label>
        <div className={styles.typeWrapper}>
          <label>Type</label>
          <div className={styles.radioContainer}>
            <label className={styles.customRadio}>
              <input type="radio" name="option" value="Auction" onChange={() => setTab(true)} />
              <span className={styles.checkmark}></span>
              <span>Auction</span>
            </label>
            <label className={styles.customRadio}>
              <input type="radio" name="option" value="Sale" onChange={() => setTab(false)} />
              <span className={styles.checkmark}></span>
              <span>Sale</span>
            </label>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.copiesWrapper}>
            <div className={styles.text}>Copies</div>
            <div className={styles.counter}>
              <div className={styles.counterBtn + ' ' + (copies < 2 ? styles.counterBtnDisable : '')} onClick={minus}>
                -
              </div>
              {copies}
              <div className={styles.counterBtn} onClick={plus}>
                +
              </div>
            </div>
          </div>
          <div className={styles.placeBid}>
            <div className={styles.text}>{tab ? 'Min.sum' : 'Sum'}</div>
            <div className={styles.placeBidWrapper}>
              <div className={styles.inputWrapper}>
                <Cleave options={{ numeral: true, delimiter: '' }} className={styles.input} onInput={handleInput} />
                <div className={styles.currency}>TASTE</div>
              </div>
              <div className={styles.cost}>({(cost * copies).toFixed(2)}$)</div>
            </div>
          </div>
        </div>
        {tab ? (
          <div className={styles.sell}>
            <div className={styles.text}>Selling will end</div>
            <div className={styles.sellWrapper}>
              <Cleave
                options={{ date: true, delimiter: '.', datePattern: ['d', 'm', 'Y'] }}
                className={styles.date}
                placeholder="00.00.0000"
              />
              <Cleave options={{ time: true, timePattern: ['h', 'm'] }} className={styles.time} placeholder="00:00" />
              <div className={styles.timer}>05h 02m 41s</div>
              <div className={styles.delete}>
                <span className="icon-close"></span>
                delete file
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </>
    );
  }
};

export default CreateArtWork;
