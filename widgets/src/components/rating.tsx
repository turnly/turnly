import clsx from 'clsx'
import { h, JSX } from 'preact'
import { useState } from 'preact/hooks'
import { AiFillCheckCircle } from 'react-icons/ai'
import { BsStarFill } from 'react-icons/bs'

import { Input } from '../components/form'
import { Title } from '../components/typography'
import { useTranslation } from '../localization'

export type RatingCallback = (rating: number, text: string) => void

export interface RatingProps extends JSX.HTMLAttributes<HTMLDivElement> {
  onCallback: RatingCallback
  isShowing: boolean
}

export const Rating = ({ isShowing, onCallback }: RatingProps) => {
  const { translate } = useTranslation()
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [isExperience, setIsExperience] = useState(false)

  const classes = clsx({
    ['tly-rating-container']: true,
    ['tly-rating--is-open']: isShowing,
  })

  return (
    <div className={classes}>
      <div className="tly-rating">
        <Title>{translate('tickets.rating.title')}</Title>

        {!isExperience && (
          <div className="tly-rating-options">
            {[...Array(5)].map((star, index) => {
              index += 1

              return (
                <button
                  type="button"
                  key={index}
                  onClick={() => {
                    setRating(index)
                    setIsExperience(prev => !prev)
                  }}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                  className="tly-rating-btn"
                >
                  <BsStarFill
                    size={40}
                    color={index <= (hover || rating) ? '#faaf00' : '#00000014'}
                  />
                </button>
              )
            })}
          </div>
        )}

        {isExperience && (
          <div className="tly-rating-input">
            <Input
              isIcon
              iconRight={<AiFillCheckCircle size={24} color="#00BFA5" />}
              placeholder={translate('tickets.rating.placeholder')}
              onIconClick={() => {
                onCallback && onCallback(rating, 'test')

                // reset values
                setRating(0)
                setHover(0)
                setIsExperience(false)
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
