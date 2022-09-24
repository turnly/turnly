import { Fragment, h } from 'preact'

import { SearchInput } from '../../components/form/search-input'
import { Title } from '../../components/typography'
import { useLocationsQuery } from '../../graphql/hooks/use-locations-query'
import { useTranslation } from '../../localization'

export const LocationsScreen = () => {
  const { translate } = useTranslation()
  const { data, isLoading, refetch } = useLocationsQuery()

  return (
    <Fragment>
      <div className="tly-locations-screen">
        <SearchInput
          placeholder={translate('locations.labels.search')}
          isLoading={isLoading}
          onSearchChange={searchQuery => refetch({ searchQuery })}
        />

        <div>
          <Title level={5}>Nearby locations</Title>
          {data.nearby.map(item => (
            <Title key={item.id} level={3}>
              {item.name}
            </Title>
          ))}

          {data.locations.length !== 0 && (
            <Fragment>
              <br />
              <Title level={5}>Other locations</Title>
            </Fragment>
          )}
          {data.locations.map(item => (
            <Title key={item.id} level={3}>
              {item.name}
            </Title>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
