class Idea < ActiveRecord::Base
  validates :quality, inclusion: { in: %w(genius plausible swill)}
end
