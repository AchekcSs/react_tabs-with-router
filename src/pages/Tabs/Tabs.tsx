import { useParams } from 'react-router-dom';

import { TabList } from '../../components/TabList';

import type { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs = ({ tabs }: Props) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <TabList tabs={tabs} selectedTab={selectedTab} />
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
