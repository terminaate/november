import { FC, HTMLAttributes, useCallback, useEffect, useRef } from 'react';
import cl from './Page.module.scss';
import classNames from 'classnames';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setGlobalLoader } from '@/store/slices/UISlice';

type PageProps = HTMLAttributes<HTMLDivElement>;

const Page: FC<PageProps> = ({ className, children }) => {
  const dispatch = useAppDispatch();
  const pageRef = useRef<null | HTMLDivElement>(null);

  const onAllImagesLoad = useCallback(() => {
    dispatch(setGlobalLoader(false));
  }, []);

  useEffect(() => {
    // Checking if all images loaded
    // https://stackoverflow.com/questions/48987395/check-if-all-the-images-in-the-page-are-loaded
    const images = pageRef.current!.getElementsByTagName('img');
    let loaded = images.length;
    for (const image of images) {
      if (image.complete) {
        loaded--;
      } else {
        image.onload = () => {
          loaded--;
          if (loaded === 0) {
            onAllImagesLoad();
          }
        };
      }
      if (loaded === 0) {
        onAllImagesLoad();
      }
    }
  }, []);

  return (
    <div ref={pageRef} className={classNames(cl.page, className)}>
      {children}
    </div>
  );
};

export default Page;
