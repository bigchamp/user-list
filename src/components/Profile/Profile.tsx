import React, {useState} from 'react';
import dayjs from 'dayjs';

import {Image, View} from 'react-native';
import {StatsGroup, Text, TextGroup} from '@components';

import {styles} from './styles';

const TABS = [
  {
    id: 0,
    label: 'Info',
  },
  {
    id: 1,
    label: 'About',
  },
  {
    id: 2,
    label: 'Work',
  },
];

export const Profile = ({user}: any) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const {name, picture, email, location, phone, dob} = user;
  const dateOfBirth = dayjs(dob.date).format('D MMMM YYYY');

  if (!user) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image source={{uri: picture.large}} style={styles.avatar} />
        <View style={styles.column}>
          <Text style={styles.title}>
            {name.first} {name.last}
          </Text>
          <TextGroup key="email" label="Email" text={email} />
          <TextGroup key="phone" label="Phone" text={phone} />
          <TextGroup key="country" label="Country" text={location.country} />
        </View>
      </View>
      <View style={styles.tabView}>
        {TABS.map(item => (
          <Text
            style={[styles.tab, activeTab === item.id && styles.activeTab]}
            onPress={() => setActiveTab(item.id)}>
            {item.label}
          </Text>
        ))}
      </View>
      {activeTab === 0 && (
        <View style={styles.socials}>
          <TextGroup key="dob" label="Date of birth" text={dateOfBirth} />
          <TextGroup
            key="address"
            label="Address"
            text={`${location.street.number}, ${location.street.name}, ${location.city}`}
          />
        </View>
      )}
      {activeTab === 1 && (
        <View style={styles.statsGroup}>
          <StatsGroup key="project" number="94" label="Projects done" />
          <StatsGroup key="teams" number="5" label="Teams" />
        </View>
      )}
      {activeTab === 2 && (
        <View style={styles.bio}>
          <Text>BIO</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipi scing elit. Tortor
            turpis sodales nulla velit. Nunc cum vitae, rhoncus leo id. Volutpat
            Duis tinunt pretium luctus pulvinar pretium.
          </Text>
        </View>
      )}
    </View>
  );
};
